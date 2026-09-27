export const name="meeting_room-fill";
export const id="dl_30dac792aaeb8e9f1f66";
export const url=new URL("../icons/meeting_room-fill.svg?v=855a63d56ae75d78a7ab29abca2ee5ad1cd1237b8efc43423839003e14068720",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
