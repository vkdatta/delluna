export const name="lucid_1-caravan";
export const id="dl_a53fe46f25ea4e6fb0df";
export const url=new URL("../icons/lucid_1-caravan.svg?v=a7003a86d2d3b3a4cc7aa5189294737f2d071744aa603a683b39eb2b621b71d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
