export const name="paid-fill";
export const id="dl_90b5097f623eb1fff376";
export const url=new URL("../icons/paid-fill.svg?v=a55fda16de2408ad991f51dc455a3cf2d4a46b697843547d4e149e79bcaf7c0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
