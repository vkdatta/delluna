export const name="add_notes";
export const id="dl_cdc2f5e3f9530a4e9715";
export const url=new URL("../icons/add_notes.svg?v=616df82945989af92986924ca8dfa0242f629bde38ee27f940ae139ad1fa2e22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
