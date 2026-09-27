export const name="lucid_2-folder-clock";
export const id="dl_947bf4bd4eee426e8077";
export const url=new URL("../icons/lucid_2-folder-clock.svg?v=f120b6f37867a52d0b092f878df9a2e761f0e5d13f3d623cb681871e8f9c6d61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
