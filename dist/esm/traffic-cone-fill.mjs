export const name="traffic-cone-fill";
export const id="dl_8e22514346624b36ba0a";
export const url=new URL("../icons/T/traffic-cone-fill.svg?v=bf4e9cf194a36468353d9cf0c830b691094c483af65e288fba490ce1d5e3d119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
