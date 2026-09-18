export const name="folder_open";
export const id="dl_a1577661b02d06b68639";
export const url=new URL("../icons/folder_open.svg?v=6c14eab9472ba95361d3f11e7c5f9c6b927af17aaa1a0129caac57821a60af03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
