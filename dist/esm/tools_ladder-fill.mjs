export const name="tools_ladder-fill";
export const id="dl_44a73a222a36311b5f7c";
export const url=new URL("../icons/tools_ladder-fill.svg?v=8062b05847ac42581a3b3c466fd4fd752ab609579254ee44e0e02f99320f7b00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
