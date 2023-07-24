import { Request } from "express";

export const getTokenInHeaders = (req: Request): string | null => {
  const { authorization } = req.headers;
  if (!authorization) {
    return null;
  }
  const accessToken = authorization.split(" ")[1];
  if (!accessToken) {
    return null;
  }
  return accessToken;
};

export const getAxiosConfig = (req: Request) => {
  const accessToken = getTokenInHeaders(req);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  return {
    withCredentials: true,
    headers,
  };
};
