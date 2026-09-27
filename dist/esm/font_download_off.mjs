export const name="font_download_off";
export const id="dl_67c94b42a9aac389afb4";
export const url=new URL("../icons/font_download_off.svg?v=7027f068b56a7d8cd9a7e49daeb5e4d5fc04579a0d9c4cb377bf63a50154a985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
