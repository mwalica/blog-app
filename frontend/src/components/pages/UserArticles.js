import React from "react";
import Section from "../../styles/Section";
import Articles from "../articles/Articles";
import ArticleForm from '../articles/ArticleForm';

const UserArticles = () => {
  return (
    <Section>
      <h3>User Articles</h3>
      <Articles />
      <ArticleForm />
    </Section>
  );
};

export default UserArticles;
