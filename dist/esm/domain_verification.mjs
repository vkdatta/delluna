export const name="domain_verification";
export const id="dl_cbad793f4b641a761db9";
export const url=new URL("../icons/domain_verification.svg?v=5de086081a8d6e0d3a2f1a6109a36daa989c05778aaa406fe4520e3a3c173d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
