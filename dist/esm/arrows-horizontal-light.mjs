export const name="arrows-horizontal-light";
export const id="dl_035564bcbd354615a8ba";
export const url=new URL("../icons/arrows-horizontal-light.svg?v=6e1e7a928b675eed0d540447d2582e6abd89ecf85a70a8a257807a03d32fcd4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
