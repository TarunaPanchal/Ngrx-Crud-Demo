import * as studentActions from './student.actions';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Student } from '../student.model';
import * as fromRoot from '../../state/app-state'

export interface StudentState extends EntityState<Student> {
    selectedStudentId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    student: StudentState;
}

export const studentAdapter: EntityAdapter<Student> = createEntityAdapter<
    Student
>();

export const defaultStudent: StudentState = {
    ids: [],
    entities: {},
    selectedStudentId: null,
    loading: false,
    loaded: false,
    error: ""
};

export const initialState = studentAdapter.getInitialState(defaultStudent);

export function studentReducer(
    state = initialState,
    action: studentActions.action
): StudentState {
    switch (action.type) {
        case studentActions.StudentActionTypes.LOAD_STUDENTS_SUCCESS: {
            return studentAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        }
        case studentActions.StudentActionTypes.LOAD_STUDENTS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

        case studentActions.StudentActionTypes.LOAD_STUDENT_SUCCESS: {
            return studentAdapter.addOne(action.payload, {
                ...state,
                selectedStudentId: action.payload.id
            });
        }
        case studentActions.StudentActionTypes.LOAD_STUDENT_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }


        case studentActions.StudentActionTypes.CREATE_STUDENT_SUCCESS: {
            return studentAdapter.addOne(action.payload, state);
        }
        case studentActions.StudentActionTypes.CREATE_STUDENT_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case studentActions.StudentActionTypes.UPDATE_STUDENT_SUCCESS: {
            return studentAdapter.updateOne(action.payload, state);
        }
        case studentActions.StudentActionTypes.UPDATE_STUDENT_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case studentActions.StudentActionTypes.DELETE_STUDENT_SUCCESS: {
            return studentAdapter.removeOne(action.payload, state);
        }
        case studentActions.StudentActionTypes.DELETE_STUDENT_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

const getStudentFeatureState = createFeatureSelector<StudentState>(
    "student"
);

export const getStudents = createSelector(
    getStudentFeatureState,
    studentAdapter.getSelectors().selectAll
);

export const getStudentsLoading = createSelector(
    getStudentFeatureState,
    (state: StudentState) => state.loading
);

export const getStudentsLoaded = createSelector(
    getStudentFeatureState,
    (state: StudentState) => state.loaded
);

export const getError = createSelector(
    getStudentFeatureState,
    (state: StudentState) => state.error
);

export const getCurrentStudentId = createSelector(
    getStudentFeatureState,
    (state: StudentState) => state.selectedStudentId
);
export const getCurrentStudent = createSelector(
    getStudentFeatureState,
    getCurrentStudentId,
    state => state.entities[state.selectedStudentId]
);
