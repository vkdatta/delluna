export const name="page_header-fill";
export const id="dl_dc182992c7fda464211e";
export const url=new URL("../icons/page_header-fill.svg?v=47dca1911c27a8eae6d09f8bf41d0adf05fbabc50fbfe93f61a24e306751196c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
