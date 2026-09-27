export const name="domain_add";
export const id="dl_ebf733e4132437e54a58";
export const url=new URL("../icons/domain_add.svg?v=999ab73ea3df9f1f087ec2a0bcedd0f6318ffb55e408190889d3b095458c1413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
