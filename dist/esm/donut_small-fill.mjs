export const name="donut_small-fill";
export const id="dl_ede70ea03756035337e8";
export const url=new URL("../icons/donut_small-fill.svg?v=359b15009aa4951e445309f97cdc8bb87004c721d7183ff61031456d90fe7d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
