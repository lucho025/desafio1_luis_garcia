import React from 'react'

function Item({ id, name, image }) {
    const classes = useStyles();

    return (
        <div className="item">
             <Card className={classes.root}>
                 <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        className={classes.media}
                        image={image}
                        title={name}
                   />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <Link to={"/item/" + id}> Ver mas</Link>
        </Button>
      </CardActions>
    </Card>
        </div>
    )
}


export default Item