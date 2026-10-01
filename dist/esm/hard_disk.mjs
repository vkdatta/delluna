export const name="hard_disk";
export const id="dl_47b26ac0c7490454ee70";
export const url=new URL("../icons/hard_disk.svg?v=f37d1c8ea0566369094a82db80b8e95f4f38602136027b80afcec210f7ee4463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
