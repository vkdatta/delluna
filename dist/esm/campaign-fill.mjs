export const name="campaign-fill";
export const id="dl_e75d5d56dded4df8a143";
export const url=new URL("../icons/campaign-fill.svg?v=770a8fd889596cca4bd0cd8c62b6e38c65abceee83390068d487dae73b197cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
