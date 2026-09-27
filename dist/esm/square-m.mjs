export const name="square-m";
export const id="dl_355018d9bc06426fb063";
export const url=new URL("../icons/square-m.svg?v=1e7f6cf602d7739c5c56f9d4d9aa13aff8e1bc211c22f747c73a2d112823f40e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
