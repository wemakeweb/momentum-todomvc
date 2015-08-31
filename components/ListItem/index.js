import TodoStore from '../../stores/TodoStore';


export default class ListItem extends Momentum.Component {
	destroy(){
		TodoStore.destroy(this.attrs.id);
	}

	checkClick(){
		TodoStore.get(this.attrs.id).then((record) => {
			TodoStore.update(record, {
				checked: !this.attrs.checked
			})
		})	
	}


	render(){
		return (
			<li class={this.attrs.checked? 'completed' : ''} >
				<div class="view">
					<input class="toggle" type="checkbox" checked={this.attrs.checked} onclick={this.checkClick} />
					<label>{this.attrs.title}</label>
					<button class="destroy" onclick={this.destroy}></button>
				</div>
				<input class="edit" value="Create a TodoMVC template" />
			</li>
		);
	}
}