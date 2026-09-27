export const name="number-circle-three-duotone";
export const id="dl_fdeb86756fc049d684d6";
export const url=new URL("../icons/number-circle-three-duotone.svg?v=200b16e4f0fd3d6432bed8083c1c42bb504bac19add27c3b2c0413d06167da05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
