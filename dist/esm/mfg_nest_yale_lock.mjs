export const name="mfg_nest_yale_lock";
export const id="dl_2f9e44cd422da2d0151b";
export const url=new URL("../icons/mfg_nest_yale_lock.svg?v=0e7f35a1d562e004a2b035faa6eaee0b0b7ede6ea162df49bcacae66134c89b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
