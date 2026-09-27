export const name="picture-in-picture";
export const id="dl_be391b78ef4c4a2ba0d3";
export const url=new URL("../icons/picture-in-picture.svg?v=23f1f3845ef7f56e4290a13bdae1d96a95c600fb4e269489b0b23181ea9bf9e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
