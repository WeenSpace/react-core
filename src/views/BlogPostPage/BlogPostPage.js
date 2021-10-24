/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import FormatAlignLeft from "@mui/icons-material/FormatAlignLeft";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
// sections for this page
import SectionText from "./Sections/SectionText";
import SectionBlogInfo from "./Sections/SectionBlogInfo";
import SectionComments from "./Sections/SectionComments";
import SectionSimilarStories from "./Sections/SectionSimilarStories";

import blogPostPageStyle from "assets/jss/react-core/views/blogPostPageStyle";

const useStyles = makeStyles(blogPostPageStyle);

export default function BlogPostPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="React Core"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Parallax image={require("assets/img/bg5.jpg").default} filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>
                How We Built the Most Successful Castle Ever
              </h1>
              <h4 className={classes.subtitle}>
                The last 48 hours of my life were total madness. This is what I
                did.
              </h4>
              <br />
              <Button color="rose" size="lg" round>
                <FormatAlignLeft /> Read Article
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionText />
          <SectionBlogInfo />
          <SectionComments />
        </div>
      </div>
      <SectionSimilarStories />
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.weenspace.com/?ref=mkpr-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    WeenSpace
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.weenspace.com/presentation?ref=mkpr-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://blog.weenspace.com/?ref=mkpr-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.weenspace.com/license?ref=mkpr-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.weenspace.com?ref=mkpr-blog-post"
                target="_blank"
              >
                WeenSpace
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
