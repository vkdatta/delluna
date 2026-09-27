export const name="square_circle-fill";
export const id="dl_2007f844061cdcd9fb37";
export const url=new URL("../icons/square_circle-fill.svg?v=81b6b70686475c78adb68522dd68d8033a87c70080503459e0ad949b7b8248bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
