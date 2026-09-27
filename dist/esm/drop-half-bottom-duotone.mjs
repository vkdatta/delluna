export const name="drop-half-bottom-duotone";
export const id="dl_c068540ac15e427b8545";
export const url=new URL("../icons/drop-half-bottom-duotone.svg?v=93007ad402cbd2c7d1d0fee8c7c2aa893b4fb50d4e008617eb305b2bfbbfb1f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
