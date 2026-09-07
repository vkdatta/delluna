export const name="dots-three-outline-vertical-duotone";
export const id="dl_b96bb4be00ec44ab94d0";
export const url=new URL("../icons/dots-three-outline-vertical-duotone.svg?v=0189a52501bc3dbaf28b3cf698e945c321f5454169c6fd79658aafff14aea9dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
