import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
//import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Badge from '@material-ui/core/Badge';
// import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  '& > *': {
    marginBottom: theme.spacing(2),
  },
  '& .MuiBadge-root': {
    marginRight: theme.spacing(4),
  },
  caption: {
    marginRight: theme.spacing(1),
  },
  message: {
    height: 'auto',
    marginBottom: theme.spacing(2),
    padding: '0 24px',
  },
  image: {
    height: 400,
    width: '100%',
    maxWidth: '100%',
  },
  content: {
    padding: 0,
  },
  favorite: {
    marginLeft: 'auto',
  },
}));
const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
}));
function PostCard({ post }) {
  const navigate = useNavigate();
  const classes = useStyles2();
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  const handlePostClick = () => {
    navigate(`/post/${post.slug}`);
  };

  return (
    <Card className={classes.root} >
      <CardHeader
        avatar={<Avatar src={post.author?.avatar} />}
        title={<Typography variant="h6">{post.title}</Typography>}
        subheader={
          <div className={classes.subheader}>
            <Typography variant="caption" className={classes.caption}>
              Escrito por
            </Typography>
            <Typography variant="subtitle2" className={classes.caption}>
              {post.author.name}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              {moment(post.date).fromNow()}
            </Typography>
          </div>
        }
      />
      <CardContent className={classes.content}>
        <Typography className={classes.message} variant="body1">
          {post.hashtags}
        </Typography>
        <CardActionArea>
          <img src={post.image} className={classes.image} alt="img" onClick={handlePostClick}/>
        </CardActionArea>
      </CardContent>

    {/* ICONS */}

      <CardActions disableSpacing>
        <IconButton aria-label="like">
          {/* <FavoriteIcon /> */}
          <div className={classes.root}>
      <div>
        <Badge color="secondary" badgeContent={count}>
          <FavoriteBorder varia-label="increase" onClick={() => {
              setCount(count + 1); 
            }}
            />
        </Badge>
      </div>
   
    </div>
        </IconButton>        
        <IconButton aria-label="comment" onClick={handlePostClick}>
          <MessageIcon />
          <Typography
            className={classes.reactions}
            color="textSecondary"
            variant="body2"
          >
            {post.comments}
          </Typography>
        </IconButton>
      </CardActions>
    
    </Card>
  );
}

export default PostCard;
