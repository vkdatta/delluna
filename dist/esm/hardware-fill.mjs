export const name="hardware-fill";
export const id="dl_e8bd978f3f2b427ba733";
export const url=new URL("../icons/hardware-fill.svg?v=0f57632d5582ed59a4c3122b9e8a1956497320ca7991156148d00b8a0e7b6ec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
