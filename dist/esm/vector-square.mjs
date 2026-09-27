export const name="vector-square";
export const id="dl_afe26bf808ea43e99efc";
export const url=new URL("../icons/vector-square.svg?v=f3d970a15e551bdfc95ad053426fc8fb86bc92a4f2dac0d252a647b5307e6242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
