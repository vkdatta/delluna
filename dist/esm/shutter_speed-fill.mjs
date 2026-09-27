export const name="shutter_speed-fill";
export const id="dl_6a9166f7b3aea3976c7b";
export const url=new URL("../icons/shutter_speed-fill.svg?v=d1975a55e63c72177b58ef155481f7b2cb3b5e1cd911ec77be91f9602170e9e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
