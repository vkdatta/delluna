export const name="tools_power_drill-fill";
export const id="dl_4cefe27d8f95da7cc63b";
export const url=new URL("../icons/tools_power_drill-fill.svg?v=75a0fbe5492990589fb50c7f03a4c716ea68e48bf08bc2e8cc869054c5248842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
