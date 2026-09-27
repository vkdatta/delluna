export const name="border_top-fill";
export const id="dl_d5d70b275d49c857479e";
export const url=new URL("../icons/border_top-fill.svg?v=a5d30d73a0e0308872db65abdf7151ea53d29f3ce4463bdffb35a1110dcd4f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
