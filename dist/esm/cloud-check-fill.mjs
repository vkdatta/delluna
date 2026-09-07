export const name="cloud-check-fill";
export const id="dl_84ec6f82cdd640d69610";
export const url=new URL("../icons/cloud-check-fill.svg?v=cfcefb3898bbf11f6d270634d5d403cd0623d52ec2bd01faef212d670e3d4956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
