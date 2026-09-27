export const name="padding-fill";
export const id="dl_765ba5fa20ea5e26db72";
export const url=new URL("../icons/padding-fill.svg?v=65a606b8c29b159bfe21cdc997967b337ee1493f1bec6247f4d92fcc9abbc496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
