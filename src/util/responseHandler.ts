export const getCommonResponse = (
  code: number,
  msg: string = "Internal Server Error"
) => {
  return {
    code,
    msg,
  };
};
