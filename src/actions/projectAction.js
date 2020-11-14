
import {CREATE_PROJECT,CREATE_PROJECT_SUCCESS,CREATE_PROJECT_ERROR} from '../actions/types'

//Note: we need getFirestore to deal with firestore datbase

export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database

      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid
      const firestore = getFirestore();
      firestore.collection('projects').add({

        ...project,
        // authorFirstName: 'Animesh',
        // authorLastName: 'Awasthi',
        // authorId: 12345,


        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,

        createdAt: new Date()

      }).then(() => {
        dispatch({ type: CREATE_PROJECT });
      }).catch(err => {
        dispatch({ type: CREATE_PROJECT_ERROR }, err);
      });
     
    }
  };

