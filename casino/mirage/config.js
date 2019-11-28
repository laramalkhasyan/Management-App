export default function() {
    this.namespace = '/api';

    this.get('/games');
    this.get('/games/:id');
    this.get('/categories')
    this.patch('/games/:id')

}
