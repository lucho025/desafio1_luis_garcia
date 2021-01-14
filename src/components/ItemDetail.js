import React from 'react'
import ItemCount from './ItemCount';

function ItemDetail( { name, image, description, stock, initial, price }) {
    const classes = useStyles();


    return (
        <div className="itemDetail">
             <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={name}
                  height="300"
                  image={image}
                  title={name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {description} su precio es de solo ${price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          <div className="itemDetail__counter">
            <ItemCount initial={initial} stock={stock} />
          </div>
        </div>
    )
}


export default ItemDetail