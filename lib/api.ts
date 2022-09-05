import axios from "axios";
import { config } from "process";
import { useAppSelector } from "../hooks/hooks";

export const BASE_URL = `https://conduit.productionready.io/api`;

export const getTags = async () => {
  const response = await axios.get(`${BASE_URL}/tags`);
  return response.data;
};

export const getRecentArticles = async (tag: string) => {
  if (tag.length === 0) {
    const response = await axios.get(`${BASE_URL}/articles/?offset=0`);
    return response.data;
  } else {
    const response = await axios.get(`${BASE_URL}/articles/?tag=${tag}`);
    return response.data;
  }
};

export const getRecentFavoriteArticles = async (
  username: string | string[] | undefined
) => {
  if (username) {
    const response = await axios.get(
      `${BASE_URL}/ARTICLES/?favorited=${username}`
    );
    return response.data;
  }
};

interface LoginType {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginType) => {
  const response = await axios.post(`${BASE_URL}/users/login`, {
    user: { email: email, password: password },
  });
  return response.data;
};

export interface RegisterType {
  username: string;
  email: string;
  password: string;
}

export const register = async ({ username, email, password }: RegisterType) => {
  const response = await axios.post(`${BASE_URL}/users`, {
    user: { username: username, email: email, password: password },
  });
  return response.data;
};

export const getCurrentUser = async (token: string | null | undefined) => {
  const response = await axios.get(`${BASE_URL}/user`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return response.data;
};

export const getArticleBySlug = async (
  slug: string | string[] | undefined,
  token: string | null | undefined
) => {
  if (token) {
    const response = await axios.get(`${BASE_URL}/articles/${slug}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response.data;
  }

  const response = await axios.get(`${BASE_URL}/articles/${slug}`);
  return response.data;
};

export const getCommentsBySlug = async (
  slug: string | string[] | undefined,
  token: string | null | undefined
) => {
  if (token) {
    const response = await axios.get(`${BASE_URL}/articles/${slug}/comments`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return response.data;
  }

  const response = await axios.get(`${BASE_URL}/articles/${slug}/comments`);

  return response.data;
};

interface addCommentArticleType {
  slug: string | string[] | undefined;
  comment: string;
  token: string | null | undefined;
}

export const addCommentToArticle = async ({
  slug,
  comment,
  token,
}: addCommentArticleType) => {
  const response = await axios.post(
    `${BASE_URL}/articles/${slug}/comments`,
    {
      comment: { body: comment },
    },
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );

  return response.data;
};
