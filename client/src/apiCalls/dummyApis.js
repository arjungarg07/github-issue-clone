import { list } from "postcss";

const list = [{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},
{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},
{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},
{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},
{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},
{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},
{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
},{
	isOpen:0, title: 'My first Issye', createdAt: 'ddsds', id:1,
}]

export const getAllIssues = params => new Promise(resolve=>{
	resolve ({
		success: true,
		data: list,
		message: 'list fetched'
	})
});