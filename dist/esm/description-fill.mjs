export const name="description-fill";
export const id="dl_a553a22dd90e0f163a23";
export const url=new URL("../icons/description-fill.svg?v=85dd4fac701797562aebf781b3e985e6d82eb4b8776b3bd30f8895b801ce1e2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
