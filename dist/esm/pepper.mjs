export const name="pepper";
export const id="dl_1e79300e29474e29ae15";
export const url=new URL("../icons/pepper.svg?v=4e0594e97d130fb39d853db445e9bbb49c10d68a693eb43c7e3bb0e1c079631e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
