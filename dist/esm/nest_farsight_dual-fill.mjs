export const name="nest_farsight_dual-fill";
export const id="dl_df509f39629217d1e338";
export const url=new URL("../icons/nest_farsight_dual-fill.svg?v=d9edf8c18afe8f09746a9bffcb4f21c47b1352fa2c7912a7a79405a8fb0b417c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
