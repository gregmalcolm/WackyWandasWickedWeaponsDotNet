import Weapon from './Weapon.js';
import Collection from './Collection.js';
import Pagination from './Pagination.js';

export default class WeaponsCollection extends Collection {
    constructor(view, items) {
        super(view, items);

        this.pagination = new Pagination();
    }

    find(id) {
        return this.items.find((item) =>
            item.id === `${id}`);
    }

    addJsonItems(results) {
        if (results) {
            this.items = results.data.map((json) => {
                const attributes = Object.assign({id: json.id}, json.attributes)
                return new Weapon(attributes, this);
            });
            this.pagination.updateFromResponseLinks(results.links);
            this.notifyView("weaponsChanged", this);
        } else {
            console.error("json data is not present");
        }
    }




}
