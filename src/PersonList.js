import React from 'react';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import InfiniteScroll from 'react-infinite-scroller';
import Typography from '@mui/material/Typography';

const baseURL = 'https://rickandmortyapi.com/api/character';

export default function PersonList() {
  const [post, setPost] = React.useState([]);

  const loadPersonList = () => {
    axios.get(baseURL).then((response) => {
      response.data.results.map((person) =>
        setPost((post) => [
          ...post,
          {
            id: post.length + 1, //Math.random().toString(16).slice(2),
            name: person.name,
            status: person.status,
            image: person.image,
            created: person.created,
            location: person.location.name
          }
        ])
      );
    });
  };
  //console.log(post)
  if (!post) return null;

  return (
    <InfiniteScroll
      key={0}
      loadMore={loadPersonList}
      hasMore={true}
      loader={
        <Typography key={0} variant="h6" color="white">
          Loading data ...
        </Typography>
      }>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {post.map((person) => (
          <Grid item xs={4} sm={4} md={4} key={person.id}>
            <Card className="Card">
              <CardHeader title={person.name} subheader={person.status} />
              <CardMedia className="max-h-80" component="img" image={person.image} />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Location: {person.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Created: {person.created}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}
