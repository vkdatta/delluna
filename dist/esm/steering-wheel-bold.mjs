export const name="steering-wheel-bold";
export const id="dl_5548e9e429888b839ee5";
export const url=new URL("../icons/steering-wheel-bold.svg?v=c37945e8e23aa3848e443ac1b6a3d877b95fde09cb65b62949a65d504c547d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
