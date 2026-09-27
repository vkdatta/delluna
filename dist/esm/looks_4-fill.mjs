export const name="looks_4-fill";
export const id="dl_51a3a2b722730229655c";
export const url=new URL("../icons/looks_4-fill.svg?v=23e1ecb0145781cf2a996e36e042e27c0a0753ad29ac886b017943b88f5cb941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
