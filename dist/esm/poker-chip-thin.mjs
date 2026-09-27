export const name="poker-chip-thin";
export const id="dl_ffd31bdd34d34b95b989";
export const url=new URL("../icons/poker-chip-thin.svg?v=cc9093ac6ef07dc87df04dd4a6ed70a949d273fd8ec13a070a9722db6c384a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
