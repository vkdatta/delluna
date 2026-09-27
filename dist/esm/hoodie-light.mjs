export const name="hoodie-light";
export const id="dl_08b4fd29aa8248b5a9c4";
export const url=new URL("../icons/hoodie-light.svg?v=745cdbf48a78ad1192abc5a84b5c8a847a11287b13433c759beb02bb14e2f848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
