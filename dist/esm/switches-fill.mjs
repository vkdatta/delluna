export const name="switches-fill";
export const id="dl_01635b28d660812c2d3c";
export const url=new URL("../icons/switches-fill.svg?v=d7ed2c863360b1876311be007e6df01c2d166f231dfe84358b165bc963940b7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
