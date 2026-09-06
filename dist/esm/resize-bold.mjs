export const name="resize-bold";
export const id="dl_9632313474774259b99e";
export const url=new URL("../icons/resize-bold.svg?v=b51892dadfa721f7147bcb95dee28e36030ef268d59690e0acd9292e555e102f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
