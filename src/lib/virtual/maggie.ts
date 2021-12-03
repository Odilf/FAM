class State {
	hunger: number
	cuddles: number
	fun: number
	energy: number

	constructor() {
		this.hunger = 0
	}
}

export class Maggie {
	nickname: string
	state: State
	lastFed: Date

	constructor(nickname: string) {
		this.nickname = nickname
		this.state = new State()
	}

	feed(foodPoints: number) {
		this.state.hunger += foodPoints
	}
}