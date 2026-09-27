export const name="page_info";
export const id="dl_1ac28c3cfc5df8fea0be";
export const url=new URL("../icons/page_info.svg?v=b9d196db29eb5f6301d05f806755df18ebfc9c47e48d2d1818753d7bd86c5c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
