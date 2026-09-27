export const name="frame_bug-fill";
export const id="dl_c7c88de6c3c2d3f86825";
export const url=new URL("../icons/frame_bug-fill.svg?v=27346c60e6f9735bf8557828044c9833dd2a10cfaca5f530336e7833fa883dae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
