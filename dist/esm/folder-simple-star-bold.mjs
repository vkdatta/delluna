export const name="folder-simple-star-bold";
export const id="dl_17b3e5c59aee46e4bb93";
export const url=new URL("../icons/folder-simple-star-bold.svg?v=9a30098ddf6bc10031ffc8723c68b41e611f78f161b7c6cf2d2c0d65b75a76ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
