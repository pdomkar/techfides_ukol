"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var cosmonauts = [
            { id: 1, name: 'Vladimír', surname: 'Remek', born: { date: { year: 1948, month: 10, day: 25 } }, power: 'dobré oči' },
            { id: 2, name: 'Vašek', surname: 'Rašek', born: { date: { year: 1949, month: 1, day: 9 } }, power: 'chytrost' },
            { id: 3, name: 'James', surname: 'Lovell', born: { date: { year: 1968, month: 2, day: 9 } }, power: 'síla' },
            { id: 4, name: 'Pham', surname: 'Tuan', born: { date: { year: 1980, month: 10, day: 10 } }, power: 'kamen' },
            { id: 5, name: 'Rákeš', surname: 'Šarma', born: { date: { year: 1984, month: 2, day: 30 } }, power: 'bystrozraký' },
            { id: 6, name: 'Sultan', surname: 'Al-Saud', born: { date: { year: 1985, month: 11, day: 12 } }, power: 'široký' },
            { id: 7, name: 'Franz', surname: 'Viehböck', born: { date: { year: 1991, month: 2, day: 9 } }, power: 'dlouhý' },
            { id: 8, name: 'Vašek', surname: 'Rašek', born: { date: { year: 1949, month: 1, day: 9 } }, power: 'clever' },
            { id: 9, name: 'Vašek', surname: 'Rašek', born: { date: { year: 1949, month: 1, day: 9 } }, power: 'clever' },
            { id: 10, name: 'Vašek', surname: 'Rašek', born: { date: { year: 1949, month: 1, day: 9 } }, power: 'clever' },
            { id: 11, name: 'Vašek', surname: 'Rašek', born: { date: { year: 1949, month: 1, day: 9 } }, power: 'clever' },
            { id: 12, name: 'Vašek', surname: 'Rašek', born: { date: { year: 1949, month: 1, day: 9 } }, power: 'clever' },
            { id: 13, name: 'Vašek', surname: 'Rašek', born: { date: { year: 1949, month: 1, day: 9 } }, power: 'clever' }
        ];
        return { cosmonauts: cosmonauts };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map