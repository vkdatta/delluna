export const name="cloud-x";
export const id="dl_a1ae6d43f58e4d4c95a4";
export const url=new URL("../icons/cloud-x.svg?v=901b5c1cf666cd26010e67b2d865a4ae5fb47a97cbf1ebde19719a88e785b344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
