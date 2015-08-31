export default class TodoStore extends Momentum.Stores.RethinkStore {
	static schema = {
		title: Momentum.Type.string,
		checked: Momentum.Type.boolean
	}

	static tableName = 'TodoStore'

	static updateById(id, updates){
		this.get(id).then((record) => {
			this.update(record, updates)
		})
	}
}

