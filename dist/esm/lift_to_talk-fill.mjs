export const name="lift_to_talk-fill";
export const id="dl_8d2aa880e42801c7cf54";
export const url=new URL("../icons/lift_to_talk-fill.svg?v=6c2b55cf0909243914b6401c9758bb02420fab3b72c8bea164442ef7d332f536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
