export const name="move_item-fill";
export const id="dl_a571bd67f5a24c9c9861";
export const url=new URL("../icons/M/move_item-fill.svg?v=39b9d75668136ae61f3fb9fe4b266565847280b1284b52f285396c9838313272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
