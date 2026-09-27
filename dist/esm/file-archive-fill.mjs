export const name="file-archive-fill";
export const id="dl_3d3b83a490704a47ad1a";
export const url=new URL("../icons/file-archive-fill.svg?v=eeaa098077ae8bb852fe63a1047f723c25500b32ace092b39733483b7acdd780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
