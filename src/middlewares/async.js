export default function({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      // if we don't care about action (it is not promise) just return
      return next(action);
      // next only forwards actions to the next middleware, it responsibility isn't
      // to start all process at the beginning
    }
    // Make sure action's promise resolves
    action.payload
      .then( response => {
        const newAction = {
          ...action,
          payload: response,
        };
        // dispatch send action through all middlewares
        dispatch(newAction);
      });
  };
};
