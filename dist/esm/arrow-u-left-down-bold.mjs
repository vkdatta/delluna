export const name="arrow-u-left-down-bold";
export const id="dl_a0a625318373425c9e71";
export const url=new URL("../icons/arrow-u-left-down-bold.svg?v=a741dcac4455bbcee7121ba60dfbc11c6f07d619d4e5d03415e1e060c067f32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
