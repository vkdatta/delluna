export const name="wifi_2_bar-fill";
export const id="dl_50caba82688a76e5e163";
export const url=new URL("../icons/wifi_2_bar-fill.svg?v=fc7acc641625f15c57b66673a4409219f37747f5984c260432a8b42d6def5e5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
