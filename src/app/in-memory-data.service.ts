import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let contacts = [
        { id: 1, mobile: '60132436565', name: 'Muaz' },
        { id: 2, mobile: '60114345464', name: 'Izzat' },
        { id: 3, mobile: '60194676949', name: 'Nafis' },
        { id: 4, mobile: '60191231456', name: 'Nawi' },
        { id: 5, mobile: '60122342543', name: 'Fitri' },
        { id: 6, mobile: '60134536456', name: 'Falah' },
        { id: 7, mobile: '60133454759', name: 'Hafiz' },
        { id: 8, mobile: '60194569005', name: 'Huzaifah' },
        { id: 9, mobile: '60193453453', name: 'Ihsan' },
        { id: 10, mobile: '60130345336', name: 'Alif' }
    ];
    return {contacts};
  }
}


