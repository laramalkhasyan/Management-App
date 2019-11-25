export default function() {
    this.namespace = '/api';

    this.get('/games');
    this.get('/games/:id');
    this.patch('/games/:id')

}