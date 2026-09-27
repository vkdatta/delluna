export const name="grid-four";
export const id="dl_d1b891ca45c34397a9d4";
export const url=new URL("../icons/grid-four.svg?v=ea965cebcee3a01b0a7fb2a26dde8ad89507673aec4ffbd1da57a225fddb7edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
