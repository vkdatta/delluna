export const name="wheelchair_pickup-fill";
export const id="dl_40ab3133955207e064a5";
export const url=new URL("../icons/wheelchair_pickup-fill.svg?v=d6f66a9f4de8a9709f87bdbc8c4f67f867aeb3a0ec49c668d5a33d432d9907f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
