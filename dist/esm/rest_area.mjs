export const name="rest_area";
export const id="dl_bb1c78f781c74f17b857";
export const url=new URL("../icons/R/rest_area.svg?v=3df5be0a593f7219f21d74e97b04cb66d7f85188d29cebbf00f43f9cc6e83d83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
