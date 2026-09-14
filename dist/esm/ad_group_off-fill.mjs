export const name="ad_group_off-fill";
export const id="dl_16da83c3a9cc4e6fb5aa";
export const url=new URL("../icons/A/ad_group_off-fill.svg?v=06d5661a27e002196f4409da4b487c646fa5827e7fc71163bb04bce5a3f8aa78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
