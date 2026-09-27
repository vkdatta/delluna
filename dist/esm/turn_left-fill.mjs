export const name="turn_left-fill";
export const id="dl_7ad42d54c46c2ba41cb3";
export const url=new URL("../icons/turn_left-fill.svg?v=06bba444ecb5bc2557f2cc5473a4af73a4c7d9f3c0ee4956bbe863b4c200c6a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
