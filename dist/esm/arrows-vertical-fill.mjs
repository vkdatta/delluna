export const name="arrows-vertical-fill";
export const id="dl_e1e1a1343035406bb628";
export const url=new URL("../icons/arrows-vertical-fill.svg?v=8e363834c2b5fab7b74edae3ff9e780c422bd9d6869e78c81b1891f33442f5fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
