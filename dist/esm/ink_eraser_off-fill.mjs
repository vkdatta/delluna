export const name="ink_eraser_off-fill";
export const id="dl_7b8b2331f446b6a803ae";
export const url=new URL("../icons/ink_eraser_off-fill.svg?v=04b771e8915e1e70a536dddbe8917e67f41f1a4923b9aba5c43ab75d3c20fd9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
