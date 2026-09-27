export const name="superset-of-light";
export const id="dl_0f178e62c8ee6c3cbf21";
export const url=new URL("../icons/superset-of-light.svg?v=f934e78bea17bd69c7748f9e2c0d9b46d81b9ae24f02eabe8b44e858dbd65c6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
