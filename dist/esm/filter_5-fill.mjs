export const name="filter_5-fill";
export const id="dl_9a4c6378157c649b44d9";
export const url=new URL("../icons/filter_5-fill.svg?v=560d2486f6190ff514024327d1f71f4881474a485c26352231a2dea271810e98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
