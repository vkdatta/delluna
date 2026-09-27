export const name="lucid_1-can-soda";
export const id="dl_3d3baf4b012f4c678697";
export const url=new URL("../icons/lucid_1-can-soda.svg?v=44c6f7ef6b6e4a5338a9c790b155d6d645a67be2c285b42a418b88f4d53d6686",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
