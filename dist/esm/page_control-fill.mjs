export const name="page_control-fill";
export const id="dl_9865373d980565d0c955";
export const url=new URL("../icons/page_control-fill.svg?v=de0961513dc7292c9b078cf586124b483a80181d1ac9070ebb8e108b2d29e129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
