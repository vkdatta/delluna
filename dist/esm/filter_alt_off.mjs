export const name="filter_alt_off";
export const id="dl_9a40e76cfa83bf35c596";
export const url=new URL("../icons/filter_alt_off.svg?v=0ea26fd8cd793760b99d3aa45daa8a926ca88ef680b0124e9c9dcecf1e952a98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
