export const name="medication_liquid";
export const id="dl_c59080011c2a4ac2b369";
export const url=new URL("../icons/M/medication_liquid.svg?v=5c346916491206e76aca0d9f1a21463e328ee202f4a034a96aeba0b95ba7877d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
