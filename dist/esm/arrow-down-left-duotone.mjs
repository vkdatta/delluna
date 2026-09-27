export const name="arrow-down-left-duotone";
export const id="dl_1d545367ac1c48b99e2d";
export const url=new URL("../icons/arrow-down-left-duotone.svg?v=602447cbba1104d8868215e3ff4c1e293134f689aabff939617323121c61e6cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
