export const name="celebration";
export const id="dl_9a71a899ef833fd27c71";
export const url=new URL("../icons/celebration.svg?v=9ea40bcd94b21428b1f95622b3e1f6783c7fca4658d5185d71b6d8da13f22f4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
