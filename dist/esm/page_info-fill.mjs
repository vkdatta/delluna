export const name="page_info-fill";
export const id="dl_7876ef72936e7fee00ca";
export const url=new URL("../icons/page_info-fill.svg?v=bfe0d0c26704cf59f9a3c6989f6101014e801bed7c03025f915340fa6d86991b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
