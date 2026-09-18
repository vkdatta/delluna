export const name="water_voc";
export const id="dl_6ea8727a117e4435a30e";
export const url=new URL("../icons/W/water_voc.svg?v=657bb77b3e831961c2654e4662e826673cf3d16f6f28ca5b9f690b6c35b47a4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
