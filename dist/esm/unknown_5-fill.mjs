export const name="unknown_5-fill";
export const id="dl_eb9eb6d8091d89e73df0";
export const url=new URL("../icons/unknown_5-fill.svg?v=c7dda835b3cef33a9d2d305857806d8c591d4fc4d6637d335d893b0408fd721d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
