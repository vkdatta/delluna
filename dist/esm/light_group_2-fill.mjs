export const name="light_group_2-fill";
export const id="dl_df26a8ae36a189776b0b";
export const url=new URL("../icons/light_group_2-fill.svg?v=9fe75cec0a434873d4c871e89a73635024d49ac440f2d8544bf5281accfe6aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
