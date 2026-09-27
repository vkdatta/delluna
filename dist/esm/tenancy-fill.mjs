export const name="tenancy-fill";
export const id="dl_359b0c90ed9f685ca2a2";
export const url=new URL("../icons/tenancy-fill.svg?v=d19c8c6bc3601616a0a7bf4fc56cfbc1fbee703372d551866ff0b2d3203128ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
