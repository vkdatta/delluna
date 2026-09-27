export const name="hand-arrow-down-duotone";
export const id="dl_c2f7f659529c423d913d";
export const url=new URL("../icons/hand-arrow-down-duotone.svg?v=22a15b5f197434cfaf7cf7db91a8a17271591d07bd7795eec3ff71fba172f656",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
