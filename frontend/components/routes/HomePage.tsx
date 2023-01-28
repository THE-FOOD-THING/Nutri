import * as React from 'react';
import { Typography, Box, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import MainFeaturedPost from '../homePageComponents/MainFeaturedPost';
import FeaturedPost from '../homePageComponents/FeaturedPost';
import Sidebar from '../homePageComponents/Sidebar';

const mainFeaturedPost = {
  title: 'The power of Nutri',
  description:
    "Nutri provides detailed information on the nutritional content of each recipe, including the amount of calories, protein, fat, and carbohydrates.",
  image: 'https://source.unsplash.com/jUPOXXRNdcA',
  imageText: 'plates with food',
};

const featuredPosts = [
  {
    title: 'Featured',
    date: 'Jan 27',
    description:
      'Eating a well-balanced diet is essential for maintaining good health and preventing chronic diseases. One of the most important things to consider when it comes to nutrition is variety.',
    image: 'https://source.unsplash.com/usfIE5Yc7PY',
    imageLabel: 'making overnight oats',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Nutri is a recipe search platform that allows users to find recipes based on their nutritional value or by the recipe name. ',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
  ],
};

export default function HomePage() {
  return (
    <div>
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Nutri
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
      </Container>
    </Box>
      </div>
  );
} 