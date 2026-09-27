export const name="filter_8-fill";
export const id="dl_40b3c1d7745adea3eecf";
export const url=new URL("../icons/filter_8-fill.svg?v=8b0ec9edbf9ddafe2e8dd89353f3e7b1236e7cd237e50dd3edd200e78b9a271a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
