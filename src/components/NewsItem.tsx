import {
    Box,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    styled,
    Typography
} from '@mui/material';
import React from 'react';

const Img = styled('img')({
    display: 'block',
    width: '200px',
    maxHeight: '100%',
    marginTop: '25px'
});

interface NewsItemProps {
    id: number;
    title: string;
    createdAt: Date;
    text: string;
    img: string;
}

export function SortItem() {
    const [sort, setSort] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };

    return (
        <Box sx={{ justifyContent: 'flex-end', width: 120 }}>
            <FormControl fullWidth>
                <InputLabel>Сортировать</InputLabel>
                <Select value={sort} label="Сортировать" onChange={handleChange}>
                    <MenuItem>По дате</MenuItem>
                    <MenuItem>По заголовку</MenuItem>
                    <MenuItem>По номеру</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default function NewsItem({ id, title, createdAt, text, img }: NewsItemProps) {
    return (
        <Box
            sx={{
                width: 500,
                height: 300,
                backgroundColor: 'primary dark',
                border: '1px solid black',
                marginBottom: '40px'
            }}>
            <Grid container direction="row">
                <Grid item>
                    <Typography component="h5">{id}).</Typography>
                </Grid>
                <Grid item>
                    <Typography component="h5">{title}</Typography>
                </Grid>
                <Grid item>
                    <Img src={img} alt="альтернатива" />
                </Grid>
                <Grid item>
                    <Typography component="h4">{text}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
