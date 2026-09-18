export const name="head_mounted_device-fill";
export const id="dl_40c6f3295b194c279735";
export const url=new URL("../icons/head_mounted_device-fill.svg?v=8d7316f57b698133ec967a1858889d0879d1d98af7f8e7c7025996a8e45b2be4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
