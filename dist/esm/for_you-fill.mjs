export const name="for_you-fill";
export const id="dl_da99ae6c18344722ad19";
export const url=new URL("../icons/F/for_you-fill.svg?v=c6f33eff622386b1109c7ed995b2d01a21c4cc543bffe88ac7ec2b31ecdd7d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
