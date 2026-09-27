export const name="arrows_more_down-fill";
export const id="dl_1def3b741ceb1c3ee158";
export const url=new URL("../icons/arrows_more_down-fill.svg?v=d4390f7fd0da4cabe58706cfe3eae7e77df50c2c0caeeee4d5e2fb643e9c2f71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
