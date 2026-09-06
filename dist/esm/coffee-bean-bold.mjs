export const name="coffee-bean-bold";
export const id="dl_f39afffbf9c4483c869c";
export const url=new URL("../icons/coffee-bean-bold.svg?v=505ba596f321e817ac090ad0876eb2fc0e6f02fea3163c751c14e0e763b49f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
