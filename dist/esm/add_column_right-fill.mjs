export const name="add_column_right-fill";
export const id="dl_523adc0e79540eebc088";
export const url=new URL("../icons/add_column_right-fill.svg?v=2ff77429a59289e5b6745789ce92b1da9d1a5e07a08ec2384cb830cdf95985f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
