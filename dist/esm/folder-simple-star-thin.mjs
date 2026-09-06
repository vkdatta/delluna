export const name="folder-simple-star-thin";
export const id="dl_021dcf7efc784f54bc6a";
export const url=new URL("../icons/folder-simple-star-thin.svg?v=64eee36dcaf070590075da58d29a51314e38c79d3f1e8f1b0d69d43cbe117203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
