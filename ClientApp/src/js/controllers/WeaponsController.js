import BaseController from './BaseController.js'

export default class WeaponsController extends BaseController {
    paramsChange(params) {
        super.paramsChange(params);
        this.fetchWeapons(params);
    }

    fetchWeapons(params) {
        this._fetchWeaponsAsync(params)
            .then(result => {
                this.weapons.params = params;
                this.weapons.addJsonItems(result);
            })
            .catch(reason => {
                console.error("Weapons ajax problem:\n", reason)
                this.router.transitionTo("/errors");
            });
    }

    prevPage() {
        this.weapons.prevPage();

        this.router.transitionTo("/weapons", this.weapons.params);
    }

    nextPage() {
        this.weapons.nextPage();

        this.router.transitionTo("/weapons", this.weapons.params);
    }

    buy(weaponId) {
        const weapon = this.weapons.find(weaponId);
        if (weapon) {
            const cartItem = this.cart.addItem(weapon);
            if (cartItem) {
                this.router.transitionTo("/items", this.weapons.params);
            }

        } else {
            console.error(`WeaponsController.buy(): Can't find weapon for id ${weaponId}`);
        }
    }

    enchant(weaponId, state) {
        debugger;
    }

    async _fetchWeaponsAsync(params) {
        const apiParams = this._buildApiParams(params);
        const response = await fetch(`/api/weapons?${apiParams}`);

        const data = response.json();
        return data;
    }

    _buildApiParams(params) {
        const query = [];
        if (params.q) {
            query.push(`like_name=${params.q}`);
        }
        if (params.page) {
            query.push(`page=${params.page}`);
        }
        return query.join("&");
    }

    // enchant(weaponId, state) {
    //     const weapon = this.weapons.find(weaponId);
    //
    //     weapon.enchanted = state;
    // }
}
