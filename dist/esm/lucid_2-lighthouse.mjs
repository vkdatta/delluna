export const name="lucid_2-lighthouse";
export const id="dl_272d129408174198a85a";
export const url=new URL("../icons/lucid_2-lighthouse.svg?v=241198fbae063eff42eed55a2eba703c8c9b70421be1f57478c3e6cd95ba50c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
