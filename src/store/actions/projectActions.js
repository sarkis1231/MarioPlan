import history from '../../history';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const GET_PROJECT = 'GET_PROJECT';

export const creatProjectAction = project => ({
  type: CREATE_PROJECT,
  payload: project,
});

export const getProjectsAction = projects => ({
  type: GET_PROJECT,
  payload: projects,
});

export const createProjectDB = project => async (
  dispatch,
  getState,
  {firebase}
) => {
  await firebase
    .firestore()
    .collection('projects')
    .add({
      ...project,
      autorFirstName: 'pier',
      authorLastName: 'galawi',
      authorId: 123654,
      createdAt: new Date(),
    });
  dispatch(creatProjectAction(project));
  history.push('/');
};

export const getProjectsFromDB = () => async (
  dispatch,
  getState,
  {firebase}
) => {
  const response = await firebase
    .firestore()
    .collection('projects')
    .get();

  const projects = response.docs.map(doc => ({...doc.data(), id: doc.id}));
  dispatch(getProjectsAction(projects));
};
