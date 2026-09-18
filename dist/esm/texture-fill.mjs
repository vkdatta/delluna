export const name="texture-fill";
export const id="dl_8dbd9c66eef74dd68566";
export const url=new URL("../icons/texture-fill.svg?v=6f3c44143d177eb18bfb517a2f7421a1d8425fb6f9ea3b2d145560a6f6964ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
