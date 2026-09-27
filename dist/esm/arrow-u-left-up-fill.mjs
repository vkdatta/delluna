export const name="arrow-u-left-up-fill";
export const id="dl_06d4fd124a9548e69aa1";
export const url=new URL("../icons/arrow-u-left-up-fill.svg?v=98280471dd8ae6cd2d9213cb925eeb6b4b5972c1acade6f12b2e7c858bf1723c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
