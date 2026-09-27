export const name="wheelchair_pickup-fill";
export const id="dl_23b3064e7c848a020d93";
export const url=new URL("../icons/wheelchair_pickup-fill.svg?v=898454455e85ffe4fa4aac4ce6e80ff510eddff55cde37f365d95cfe81d973df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
