export const name="edit_square-fill";
export const id="dl_65ee46cd500fd18c519f";
export const url=new URL("../icons/edit_square-fill.svg?v=28f714e542d2c5a41c9730f0fc30f07335282709f94926be2af0a7b41cd5e8c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
