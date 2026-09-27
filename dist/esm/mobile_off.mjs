export const name="mobile_off";
export const id="dl_7ee00ae7816e6ef819d6";
export const url=new URL("../icons/mobile_off.svg?v=c766d4a83a7190fb6c0dd47234d0f8a26d3f824c845303b488b6c498bb4f544c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
