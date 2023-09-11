// function describe(name: string, prompt: ()=>any){

// }
// CustomTestingFramework.ts

interface Assertion {
	toBe(expected: any): void;
	toType(expectedType: string): void;
}

interface CustomTestingFramework {
	test(description: string, fn: () => void): void;
	describe(description: string, fn: () => void): void;
	expect(value: any): Assertion;
	run(): void;
}
type TestCase = {
	description: string;
	fn():void;
};
const customTestFramework = (): CustomTestingFramework => {
	const testCases: TestCase[] = [];

	const test = (description: string, fn: () => void): void => {
		testCases.push({ description, fn });
	};

	const describe = (description: string, fn: () => void): void => {
		console.log(description);
		fn();
	};

	const expect = (value: any): Assertion => {
		const assertion: Assertion = {
			toBe: (expected: any): void => {
				if (value === expected) {
					console.log('Test passed.');
				} else {
					console.error(`Test failed. Expected ${expected}, but got ${value}.`);
				}
			},
			toType: (expectedType: string): void => {
				const valueType = typeof value;
				if (valueType === expectedType) {
					console.log('Test passed.');
				} else {
					console.error(
						`Test failed. Expected value to be of type ${expectedType}, but got ${valueType}.`
					);
				}
			},
		};

		return assertion;
	};

	const run = (): void => {
		testCases.forEach((testCase) => {
			console.log(`Running test: ${testCase.description}`);
			try {
				testCase.fn();
			} catch (error: any) {
				console.error('Error:', (error as Error).message);
			}
		});
	};

	return { test, describe, expect, run };
};

export const { test, describe, expect, run } = customTestFramework();
