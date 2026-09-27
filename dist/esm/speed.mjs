export const name="speed";
export const id="dl_abf286d67d36507128f2";
export const url=new URL("../icons/speed.svg?v=03286b51e2a40fe43bd6524563040fb5b915a9ff742397318f9e92af64a4988a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
