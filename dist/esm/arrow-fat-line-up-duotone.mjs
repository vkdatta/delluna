export const name="arrow-fat-line-up-duotone";
export const id="dl_657549d7443b44ed9d96";
export const url=new URL("../icons/arrow-fat-line-up-duotone.svg?v=7cf247075cfce25a0476dbe6052fac5f481c598b47d344418279656eb9a29ad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
