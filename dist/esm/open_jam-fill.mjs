export const name="open_jam-fill";
export const id="dl_a309f02d4093ee094ebd";
export const url=new URL("../icons/open_jam-fill.svg?v=7795bd852e1f9a71eb8ad003ef4eadf29888d091630e34a4f43050dc2366deea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
