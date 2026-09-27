export const name="blur_circular-fill";
export const id="dl_d4070f3d9964bbb9f418";
export const url=new URL("../icons/blur_circular-fill.svg?v=0303904786482d928bf364f352ac33faff98cf8226f8bb7d69326708c3b0d96e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
