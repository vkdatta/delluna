export const name="coda-logo-thin";
export const id="dl_fa6b789ce2b244d2a0ed";
export const url=new URL("../icons/coda-logo-thin.svg?v=3a1a740819c93e07d582af67e7dbd9f6ac53b061b1381d5a5ee5ee881e05f373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
