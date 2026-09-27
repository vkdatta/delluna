export const name="lucid_3-robot-vacuum";
export const id="dl_487e5787d3394740b289";
export const url=new URL("../icons/lucid_3-robot-vacuum.svg?v=a7d0c46f52a06ee5c25eee5a5ed5369d74383a93a184d02161e192ef6936bd43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
