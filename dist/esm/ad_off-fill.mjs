export const name="ad_off-fill";
export const id="dl_5ef8619a35c5e3c2f591";
export const url=new URL("../icons/ad_off-fill.svg?v=2afe0eb11d1c483f158e02c3aebcabe2d48327f3349d86260becc0d26b926bf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
