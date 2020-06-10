import React, { useState, useContext } from "react";
import styled from "styled-components";

import ArticleContext from "../../context/article/articleContext";

import ImageInput from "../../styles/ImageInput";

const ArticleForm = () => {
  const articleContext = useContext(ArticleContext);
  const [article, setArticle] = useState({
    title: "",
    content: "",
    image: "",
    status: "Yes"
  });

  const { title, content, image, status } = article;

  const changeHandler = (e) =>
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });

  const imageUploadHandler = () => {};

  const submitHandler = (e) => {
    e.preventDefault();
    articleContext.addArticle(article);
    setArticle({
      title: "",
      content: "",
      image: "",
      status: "Yes"
    });
  };

  return (
    <Wrapper
      autoComplete="off"
      onSubmit={submitHandler}
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Add Article</h3>

      <FormField>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={changeHandler}
        />
      </FormField>
      <FormField>
        <textarea
          cols="30"
          rows="10"
          placeholder="content"
          name="content"
          value={content}
          onChange={changeHandler}
        />
      </FormField>
      <FormField>
        <ImageInput
          name="file"
          handleImage={imageUploadHandler}
          value={image}
        />
      </FormField>
      <FormField>
        <h5>Show on Homepage</h5>
        <input
          type="radio"
          name="status"
          value="Yes"
          checked={status === "Yes"}
          onChange={changeHandler}
        />
        Yes
        <input
          type="radio"
          name="status"
          value="No"
          checked={status === "No"}
          onChange={changeHandler}
        />
        No
      </FormField>
      <FormField>
        <input type="submit" value="Add Article" />
      </FormField>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  padding: 1em;
  h3 {
    text-align: center;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
  }
`;

const FormField = styled.div`
  width: 100%;
  padding: 2em 2em 0;
  &:last-child {
    padding-bottom: 2em;
  }
  input[type="text"],
  textarea {
    width: 100%;
    padding: 0.5em 1em;

    background-color: ${({ theme }) => theme.background};
    font-family: ${({ theme }) => theme.mainFont};
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.formBorder};
    border-radius: 0.25em;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #6878a4;
    }
  }
  textarea {
    resize: none;
  }

  input[type="submit"],
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40%;
    padding: 0.4em 1em;
    border: none;
    background-color: ${({ theme }) => theme.orange};
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    border-radius: 0.2em;
    transition: color 0.4s ease;
    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export default ArticleForm;
