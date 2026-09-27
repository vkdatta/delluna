export const name="currency_yuan-fill";
export const id="dl_353739b7f02a80e54c46";
export const url=new URL("../icons/currency_yuan-fill.svg?v=09fa9cfac98ddc6e3a857d9f9a29b42b80518dbf760ad594e90c4ffb9ce4660b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
