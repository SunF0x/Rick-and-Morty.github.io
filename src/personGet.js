import React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InfiniteScroll from 'react-infinite-scroller'
import './personGet.css';

const baseURL = 'https://rickandmortyapi.com/api/character';

export default function PersonList() {
  const [post, setPost] = React.useState([]);

  const loadPersonList = () => {
    // const result = []
    axios.get(baseURL).then((response) => {
      response.data.results.map((person) => 
          setPost((post) =>
            [...post,{
              id: post.length+1,//Math.random().toString(16).slice(2),
              name: person.name,
              status: person.status, // Random age
              image: person.image,
              created: person.created,
              location: person.location.name
            }]
          )
        )})
  };
  //console.log(post)
  if (!post) return null;

  return (
    // <div className="flex flex-row gap-6 flex-wrap">
    // <div className="App-card">
    <InfiniteScroll
          //datalength={i} //This is important field to render the next data
          //next={loadPersonList}
          key={0}
          loadMore={loadPersonList}
          hasMore={true}
          loader={<div key={0} className="text-center">loading data ...</div>}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            post.map((person) => (
              <Grid item xs={4} sm={4} md={4} key={person.id}>
                {/* <Item>xs=2</Item> */}

                <Card className="Card">
                  {/* <div className="flex flex-row gap-6"> */}
                    <CardHeader
                    title={person.name}
                    subheader={person.status}
                    />
                    <CardMedia
                    component="img"
                    height="300px"
                    image={person.image}
                    />
                    <CardContent>
                      <Typography variant="body1" color="text.secondary">
                        Location: {person.location}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Created: {person.created}
                      </Typography>
                    </CardContent>
                  {/* </div> */}
                </Card>
              </Grid>)
            )
            }
      </Grid>
    </InfiniteScroll>
  );
}

// persons.slice(0, 5).map((person) => (
//             <Card sx={{ maxWidth: 345 }}>
//                 <CardHeader
//                 avatar={(
//                     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                     R
//                     </Avatar>
//                 }
//                 title={person.name}
//                 subheader="September 14, 2016"
//                 />
//                 <CardMedia
//                 component="img"
//                 height="194"
//                 image="/static/images/cards/paella.jpg"
//                 alt="Paella dish"
//                 />
//                 {/* <CardContent>
//             <Typography variant="body2" color="text.secondary">
//                 This impressive paella is a perfect party dish and a fun meal to cook
//                 together with your guests. Add 1 cup of frozen peas along with the mussels,
//                 if you like.
//             </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="share">
//                 <ShareIcon />
//             </IconButton>
//             <ExpandMore
//                 expand={expanded}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//             >
//                 <ExpandMoreIcon />
//             </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//                 <Typography paragraph>Method:</Typography>
//                 <Typography paragraph>
//                 Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//                 aside for 10 minutes.
//                 </Typography>
//                 <Typography paragraph>
//                 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//                 medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//                 occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//                 large plate and set aside, leaving chicken and chorizo in the pan. Add
//                 pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//                 stirring often until thickened and fragrant, about 10 minutes. Add
//                 saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//                 </Typography>
//                 <Typography paragraph>
//                 Add rice and stir very gently to distribute. Top with artichokes and
//                 peppers, and cook without stirring, until most of the liquid is absorbed,
//                 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//                 mussels, tucking them down into the rice, and cook again without
//                 stirring, until mussels have opened and rice is just tender, 5 to 7
//                 minutes more. (Discard any mussels that don&apos;t open.)
//                 </Typography>
//                 <Typography>
//                 Set aside off of the heat to let rest for 10 minutes, and then serve.
//                 </Typography>
//             </CardContent>
//             </Collapse> */}
//             </Card>
