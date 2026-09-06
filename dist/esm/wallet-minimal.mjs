export const name="wallet-minimal";
export const id="dl_0eb6d3ff5e264fd18a73";
export const url=new URL("../icons/wallet-minimal.svg?v=2d49f0bf36ba22ffef9cb14b4372e51ae1c0d4368f62965e1f59792bc8f83920",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
