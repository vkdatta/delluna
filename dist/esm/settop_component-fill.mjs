export const name="settop_component-fill";
export const id="dl_4b8586f88ce07513c822";
export const url=new URL("../icons/settop_component-fill.svg?v=712fae120721461dc065643d019d38683774c1631e320adf6bffb33fcc546cb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
