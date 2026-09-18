export const name="mobile_rotate-fill";
export const id="dl_ceea13e717cb441c9b6c";
export const url=new URL("../icons/M/mobile_rotate-fill.svg?v=f30caba0223ec6a35ce1e03943c1f1790975dd6fa65be22528ad3a60f78a2bee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
