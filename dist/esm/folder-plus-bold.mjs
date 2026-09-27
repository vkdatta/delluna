export const name="folder-plus-bold";
export const id="dl_03e3097471244bf68e79";
export const url=new URL("../icons/folder-plus-bold.svg?v=4a7d3d0b518518f54b856a63f8d9a0fa33960aacf0eca2bb06dcd9cd68011988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
