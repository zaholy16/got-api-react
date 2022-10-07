import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./styles.characters.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { pink, grey } from '@mui/material/colors';
import { BasicModal } from '../Modal/Modal';

const CharacterCard = ({id, name, src, status, religion, culture, gender, actor}) => {
    return (
    <>
        <Card key={id} sx={{ maxWidth: 345 }}>
            <div className='status'>
                {
                    status === true 
                        ? <FavoriteIcon sx={{ color: pink[500]}} fontSize="large" /> 
                        : <HeartBrokenIcon sx={{color: grey[900]}} fontSize="large" /> 
                }
            </div>
            <CardMedia
                component="img"
                height="500"
                image={src}
                alt="Character"
            />
            <CardContent>
                <h2>{name}</h2>
                <div className='details'>
                    <BasicModal name={name} religion={religion} culture={culture} gender={gender} actor={actor} />
                </div>
            </CardContent>
        </Card>       
    </>
    )
}

export { CharacterCard }