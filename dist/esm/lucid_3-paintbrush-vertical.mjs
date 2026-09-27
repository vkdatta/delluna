export const name="lucid_3-paintbrush-vertical";
export const id="dl_0b28e2804ecd4559a8d1";
export const url=new URL("../icons/lucid_3-paintbrush-vertical.svg?v=f24b46a00459f7890696b6d5c34c60cb80a5c3634254edaa616e1a193670392c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
