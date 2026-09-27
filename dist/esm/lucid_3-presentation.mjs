export const name="lucid_3-presentation";
export const id="dl_f90f2b482c964f8cadd2";
export const url=new URL("../icons/lucid_3-presentation.svg?v=6692042229409a3cd8a31222bdc056875e14bd9a31a93cabfbe483fc06d57b12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
