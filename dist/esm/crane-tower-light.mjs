export const name="crane-tower-light";
export const id="dl_3953ed8e528543978047";
export const url=new URL("../icons/crane-tower-light.svg?v=975df8d511ef36079e9e3248bf9f915e78f9e12cdaff5c520044f3a0089173d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
