import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

export default function ErrorPage({ error }: { error: Error }) {
    return (
        <Grid container direction="column" gap={2}>
            <Typography variant="h1">Упс...</Typography>
            <Typography variant="h2">Произошла непредвиденная ошибка</Typography>
            <Card>
                <CardHeader>Текст ошибки</CardHeader>
                <CardContent>{error.message}</CardContent>
            </Card>
            <Typography variant="h5">Отправьте текст ошибки в техподдержку</Typography>
        </Grid>
    );
}
// TODO: стилизовать
