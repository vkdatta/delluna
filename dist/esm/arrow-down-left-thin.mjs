export const name="arrow-down-left-thin";
export const id="dl_f483f67a7c814875857d";
export const url=new URL("../icons/arrow-down-left-thin.svg?v=bf59ec1f41c3d3cc4065cc27c4068e97e578daad9f781320a7bf6d587121228a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
