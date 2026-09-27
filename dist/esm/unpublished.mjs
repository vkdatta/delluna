export const name="unpublished";
export const id="dl_415957afaab96653ff62";
export const url=new URL("../icons/unpublished.svg?v=84dc6ad821284e0346b1734414c4b193d33f30d938895bba543cea7255896b9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
