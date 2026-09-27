export const name="stop-circle-bold";
export const id="dl_e501509cec92b6f159d7";
export const url=new URL("../icons/stop-circle-bold.svg?v=81fe3d15e46111f0c8f86286a6db0052662532bb62323729c978197aab0547a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
