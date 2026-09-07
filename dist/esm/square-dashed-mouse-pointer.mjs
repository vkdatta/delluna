export const name="square-dashed-mouse-pointer";
export const id="dl_d0c352d917d746bb9c38";
export const url=new URL("../icons/square-dashed-mouse-pointer.svg?v=49c4f785bdae0a2dd0eb58446a75d3e36e8faefd1d7573462e0e3763856ce7aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
