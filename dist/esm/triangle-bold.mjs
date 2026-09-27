export const name="triangle-bold";
export const id="dl_c4c618e10ef85ab09594";
export const url=new URL("../icons/triangle-bold.svg?v=e255368f457cf7185424a7c18bcaa62201aaac0521c5d48e9e13a3bc2ffcd968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
