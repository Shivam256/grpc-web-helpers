const utilities = (enqueueSnackbar, localStorage) => {
  const handleError = (response) => {
    const error = response?.getError();
    const message = response?.getMessage();
    if (error == null || error == 0) return true;
    if (error != null || error > 0) {
      if (enqueueSnackbar) {
        enqueueSnackbar(message, { variant: "error" });
      }
      return false;
    }
    return true;
  };

  const tokenise = (request) => {
    const token = localStorage.getItem("accessToken");
    request.setToken(token);
    return request;
  };

  return {
    handleError,
    tokenise,
  };
};

export default utilities;
