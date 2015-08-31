import TodoStore from '../../stores/TodoStore';

export default class Footer extends Momentum.Component {
	storeSelect(){
		return TodoStore.find({checked: false});
	}

	storeDidUpdate(todos){
		this.setState({count: todos.length})
	}

	clearCompleted(){
		TodoStore.find({checked: true}).then((records) => {
			records
				.map((record) => record.id)
				.map((id) => TodoStore.destroy(id))
		});
	}

	render(){
		if(!this.state.count) this.state.count = 0;

		return (
			<div>
				<span class="todo-count"><strong>{this.state.count}</strong> item left</span>
				<button class="clear-completed" onclick={this.clearCompleted} style={this.state.count === 0 ? "display:none;" : ''}>Clear completed</button>
			</div>
		);
	}
}