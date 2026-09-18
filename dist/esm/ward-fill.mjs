export const name="ward-fill";
export const id="dl_5d0153865fb54960b62f";
export const url=new URL("../icons/ward-fill.svg?v=465bb9bd9d027bc6dbbf15d96503b547088737fd335578dce828d764fe2d8b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
