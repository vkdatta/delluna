export const name="tipi-fill";
export const id="dl_608c7cdbe5f34666c00e";
export const url=new URL("../icons/tipi-fill.svg?v=a9b02b9cf9d6a9ed50cb7d8852d9b404dbe0001f83efe6b9500d7e5e671eee2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
