import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent} from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 238,
    },
});
export default function ImgMediaCard() {
    const classes = useStyles();
    return (
        <div onClick={() => window.open("/new_page2")}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Rosetka"
                        height="238"
                        src="/images/rosetka001-eba.png"
                        title="Elite Home"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Elite Home
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            140.4
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}