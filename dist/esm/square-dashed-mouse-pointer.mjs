export const name="square-dashed-mouse-pointer";
export const id="dl_d0c352d917d746bb9c38";
export const url=new URL("../icons/square-dashed-mouse-pointer.svg?v=e52c4a7ae723a655053bfa4237f9a898e5c38195076e54c2269dd5f25e4b4b9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
