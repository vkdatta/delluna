export const name="cowboy-hat-duotone";
export const id="dl_f3c652af06214b0fba06";
export const url=new URL("../icons/cowboy-hat-duotone.svg?v=6197810af0bfde08609d00b3d20ddf45baf4520404cbd9100f64c96d5892dffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
