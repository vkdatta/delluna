export const name="cookie-fill";
export const id="dl_e75b2a326c33d29bbfa3";
export const url=new URL("../icons/cookie-fill.svg?v=71b79a465fc4e9ebddb75e7973d6f9b398ac0f7f952b3ea36749fcecbde04726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
