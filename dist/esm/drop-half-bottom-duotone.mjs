export const name="drop-half-bottom-duotone";
export const id="dl_c068540ac15e427b8545";
export const url=new URL("../icons/drop-half-bottom-duotone.svg?v=83703372508163a67492ccdf9a92e2428483f6a4b0516b0192b04d42f2ede18c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
