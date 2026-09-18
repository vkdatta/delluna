export const name="mode_fan";
export const id="dl_d9530282a88e45e3b0c4";
export const url=new URL("../icons/mode_fan.svg?v=8803725f0e891523f9c978cdaecfd87726cb4a8a7719f394d5540bb405e1f1d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
