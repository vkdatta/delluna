export const name="assistant_on_hub-fill";
export const id="dl_c2fce605d26fa8dc91ed";
export const url=new URL("../icons/assistant_on_hub-fill.svg?v=793054f1b08a53a3b5a517f9f1b690f51984e7dc069ebbe4ef4d2376b7b49031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
