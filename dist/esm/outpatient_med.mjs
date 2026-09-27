export const name="outpatient_med";
export const id="dl_a873f6585fd35147b55c";
export const url=new URL("../icons/outpatient_med.svg?v=e56f9446b0e656a26f9819027f874c0b5bbbcac4bb2bd6c72897c7b2f6c6c897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
