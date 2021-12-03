export class Parameters {
	cute: number
	cozy: number
	royalty: number
	swag: number
	lazy: number

	constructor(values = Array<number>(5), normalize = true) {
		if (normalize) {
			const total = values.reduce((acc, cur) => acc + cur, 0)
			values = values.map(v => v / total)
		}

		this.cute = values[0]
		this.cozy = values[1]
		this.royalty = values[2]
		this.swag = values[3]
		this.lazy = values[4]
	}
}

export class Photo {
	src: string
	alt: string
	parameters?: Parameters

	score = (search_parameters: Parameters) => {
		const parameters = Object.values(this.parameters)
		const search_values = Object.values(search_parameters)
		
		const score = parameters.map((v, i) => search_values[i] * v).reduce((acc, cur) => acc + cur, 0)
		return score
	}

	constructor(alt: string, src: string, parameters = [1, 1, 1, 1, 1]) {
		this.alt = alt
		this.src = src
		this.parameters = new Parameters(parameters)
	}
}


export function sorted(parameters: Parameters) {
	function compare(a: Photo, b: Photo) {
		const difference = b.score(parameters) - a.score(parameters)
		if (difference < 0) { return -1 } 
		else if (difference > 0) { return 1 }
		return 0;
	}

	return [...photos].sort(compare)
}


export const photos: Photo[] = [
	new Photo(
		'Snowy days', 
		'https://lh3.googleusercontent.com/pw/AM-JKLW8HJh9gBmMV7qTzcc-7ibYHud6sOzaNMsPSmTbPMcAXn3YyGpZt-9p9hjgqdZwXAbfSelwFblJxgHYkVCtQTGSg5crIry2ldxr0tRswBNcW3RCMoTsV4ZE1dIxo8cCles7bHe7tPHxL3B3cl0v6EppXA=w2000-h1500-no?authuser=0', 
		[1, 1.2, 0.1, 0.5, 0.1]	
	), 
	new Photo(
		'Culazo', 
		'https://lh3.googleusercontent.com/pw/AM-JKLWtGJGJx8krLU8S6GEBBwAQDc-B1XJGcC5EdTJiaMlz3uoqRvk2iJbscaKCQk8jouf0XPEJ-53HOSaC1fKBM4uqydUYkZuVX2NXfoDiBwyl4F6SnL8ITYPVyxbzWP-1jXWDDIn2BXClfCutqTkuMdyP6A=w1201-h1601-no?authuser=0', 
		[0.3, 0.3, 1, 0.3, 0.4]	
	), 
	new Photo(
		'Staring', 
		'https://lh3.googleusercontent.com/pw/AM-JKLWHVP-MYZ3-A2m-LEQ8UWZnGUjF7B_r2Jpeg7S5lMCFfZgmrPoWLC0uywScwGYQcvGt-HtkfmCewFvETDXzQyHmAw719BkgMckh5a9Ux9lkK-Qv4YLvIYZlYs2rwBcZeICdmTEBLW0jGa4x6VwKKF3b5g=w948-h1072-no?authuser=0',
		[0.6, 1, 0.9, 0.4, 0.1]	
	), 
	new Photo(
		'Swag', 
		'https://lh3.googleusercontent.com/pw/AM-JKLUUGpJQAlDutYDPWhBdYgZx9UurCkFU00CR4h_lYrAXpCkr9RVObYdbmcFLmvj_Iazhi63Wrcpbasnwfi5Z_-K9ESM92PYhAFvbM7B7G_qo-0BAVsHi6WTQBGX6XMl3gNQIiNfDWKt6rn279AXmhy9exQ=w1718-h1586-no?authuser=0', 
		[10, 10, 20, 69, 0.1]	
	), 
	new Photo(
		'Laying down', 
		'https://lh3.googleusercontent.com/pw/AM-JKLWNEk-EcrOkjspTrfdjoILjN444tuMdov1V9uPFPxx236itsjIQUGAjN1pt3NoiiBk-mNWVh389Q12yxw4RySfVxdXNnL0D76gVH4XB2bTHoxSKBpiKDjG37QrLAU10tTCh0QUP-05OVmh0qKyjSw3ySQ=w1201-h1601-no?authuser=0', 
		[1, 1, 1, 1, 1.3]	
	), 
	new Photo(
		'Laying sideways', 
		'https://lh3.googleusercontent.com/pw/AM-JKLV3qFBVAOgo92xCFG2PGnekt8o0mnxR8gLcpMXQO7qQ-pA3iglkvm5LY9RspUMoFh4h-_b5CYD3u6Q9Lx49HNLUfZCdzVf2fZRtnl4k4_n4NoWM1OQT50ELWh-vAMX-graUhKyECPhGSmS3G03271TB5g=w2135-h1601-no?authuser=0', 
		[1, 1.2, 0.2, 0.3, 1.2]	
	), 
	new Photo(
		'Snugly with Clara', 
		'https://lh3.googleusercontent.com/pw/AM-JKLXOIzuWCb-7gw9iPrqWUSlWz_7VSdhl_VfPI_oQKZ3riBU_y8CI6zrzQtmcXk_lMm9b6DUg5BcD4tdstumqfcSfJ4YjQBGGigzvEKhJVesow0CXEoSS4WWLAlSYwbSg18BDyJQ1NOAHeZJvXlmd7xc4WQ=w1201-h1601-no?authuser=0', 
		[1, 1, 1, 1, 4]	
	), 
	new Photo(
		'Airplane', 
		'https://lh3.googleusercontent.com/pw/AM-JKLWzX_I4857UugvCOwVi_DDwHq9euu9iPSav1BmyEccIHkNAJZlL1TawjxNqvib8tQsmRoHYU_cb2PieH_o9d_A3NHdXK7elV08i9Iztb-9XhYLqPoYNjhZLGHI_4SLz58VXjoRQ9F2Jgb8qp-BGjUql4Q=w1201-h1601-no?authuser=0', 
		[0.3, 1, 0.6, 0.1, 1]	
	), 
	// new Photo(
	// 	'Maggie brings Clara happiness', 
	// 	'https://lh3.googleusercontent.com/pw/AM-JKLWs9kpvtFFt1OAG23j7_jhZMN3eHsZCqsVCiXOanml8ftyKJ2CCqgdjTnZCspCdO9XmOoUmNVLv51coOql04EomX4AcCvuqpUO7UsCo_IOfI9__9Xh3i0EJNx9K56tpUZAHO147Fp8zSziyGBymb9wpiA=w1201-h1601-no?authuser=0', 
	// 	[1, 1, 1, 1]
	// ), 
	new Photo(
		'Magic is boring', 
		'https://lh3.googleusercontent.com/pw/AM-JKLXk_2sV_RJ5lDFPbPF91KFUM0k9taZeDgx9Yg1bhm5zSYumpLHM4lqwxO53R1REUz75wIKsbKbcPvbtt6ZGRfbHexQvpkKkw3OUdwVthQYsGKQF512oHZe60NeE7CMUfHgQX7KpdDNecPRYEzVHz_t1xQ=w1201-h1601-no?authuser=0', 
		[1, 1.5, 0.4, 0.2, 1.2]
	), 
	new Photo(
		'Ready for the towel', 
		'https://lh3.googleusercontent.com/pw/AM-JKLWeW31JzE7G9piC9CokaoXTlQnbxtDcAiq6Xno2pzMVzMzPwrT24hqHFUIQweILh8XLN6ojal0u-lUfGNnDRJjWQ1op2vUoPKCoe-SzRbYCbh6PFGcJaJzCy7QChPVeyuMJu050fqTCIbbD77cskzz0yA=w902-h1601-no?authuser=0', 
		[0.3, 0.3, 1, 0.4, 0.1]	
	), 
	// new Photo(
	// 	'Staring contest',
	// 	'https://lh3.googleusercontent.com/pw/AM-JKLXkVvp41OZaxzB9D4wOmB9itLiuW3gXaVCE2epKa2sXct1vIRca0PaqfcYbH3zkyzbs6mkOSvjvyZc5yDWvyMZ8qZevK9mkpiL_1Arf_Ryi9bGCXZfSWrV2hvkBpoKLkRkYkPUu6pHcDkTYr5zRLL0dBg=w980-h1448-no?authuser=0',
	// 	[1, 1, 1, 1]
	// )
]

export const staff = {
	clara: new Photo('Clara', 'https://lh3.googleusercontent.com/pw/AM-JKLWs9kpvtFFt1OAG23j7_jhZMN3eHsZCqsVCiXOanml8ftyKJ2CCqgdjTnZCspCdO9XmOoUmNVLv51coOql04EomX4AcCvuqpUO7UsCo_IOfI9__9Xh3i0EJNx9K56tpUZAHO147Fp8zSziyGBymb9wpiA=w735-h980-no?authuser=0'),
	javi: new Photo('Javi', 'staff/Javi.jpg'),
	ody: new Photo('Ody', 'staff/Ody.jpg'),
}