export interface IGenerator {
	generate: (
		config: any,
		namedTypesById: Map<string, TNamedType>,
	) => Promise<TGeneratorResult>
}

export declare type TGeneratorResult = IGeneratorResult | IGeneratorResult[]

export interface IGeneratorResult {
	filePath: string[]
	content: string
}

export type TNamedType = IInterface | IStringEnum | INumberEnum

export type TFieldType =
	| IPrimitiveValue
	| IStringEnumReference
	| IStringEnumValueReference
	| INumberEnumReference
	| INumberEnumValueReference
	| IInterfaceReference
	| IArray
	| IMap

export interface IInterface {
	kind: 'Interface'
	id: string
	directoryPath: string[]
	name: string
	description: string
	fields: IInterfaceField[]
}

export interface IInterfaceField {
	kind: 'InterfaceField'
	name: string
	description: string
	fieldType: TFieldType
}

export interface IStringEnum {
	kind: 'StringEnum'
	id: string
	directoryPath: string[]
	name: string
	description: string
	values: IStringEnumValue[]
}

export interface IStringEnumValue {
	kind: 'StringEnumValue'
	name: string
	value: string
	description: string
}

export interface INumberEnum {
	kind: 'NumberEnum'
	id: string
	directoryPath: string[]
	name: string
	description: string
	values: INumberEnumValue[]
}

export interface INumberEnumValue {
	kind: 'NumberEnumValue'
	name: string
	value: number
	description: string
}

export interface IPrimitiveValue {
	kind: 'PrimitiveValue'
	name: 'boolean' | 'number' | 'string'
	isNullable: boolean
}

export interface IInterfaceReference {
	kind: 'InterfaceReference'
	targetId: string
	absoluteDirectoryPath: string[]
	relativeDirectoryPath: string[]
	name: string
	isNullable: boolean
}

export interface IStringEnumReference {
	kind: 'StringEnumReference'
	targetId: string
	absoluteDirectoryPath: string[]
	relativeDirectoryPath: string[]
	name: string
	isNullable: boolean
}

export interface IStringEnumValueReference {
	kind: 'StringEnumValueReference'
	targetId: string
	absoluteDirectoryPath: string[]
	relativeDirectoryPath: string[]
	name: string
	valueName: string
	isNullable: boolean
}

export interface INumberEnumReference {
	kind: 'NumberEnumReference'
	targetId: string
	absoluteDirectoryPath: string[]
	relativeDirectoryPath: string[]
	name: string
	isNullable: boolean
}

export interface INumberEnumValueReference {
	kind: 'NumberEnumValueReference'
	targetId: string
	absoluteDirectoryPath: string[]
	relativeDirectoryPath: string[]
	name: string
	valueName: string
	isNullable: boolean
}

export interface IArray {
	kind: 'Array'
	fieldType: TFieldType
	isNullable: boolean
}

export interface IMap {
	kind: 'Map'
	fieldType: TFieldType
	isNullable: boolean
}
