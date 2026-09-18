export const name="sword_rose";
export const id="dl_293955290efb4aa5a5c1";
export const url=new URL("../icons/sword_rose.svg?v=6c6b23133a7ed8618485c48b89eb55cd475ebe1bfab22fd8403382e2bc7c6b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
