export const name="logic";
export const id="dl_5126c9a196244508b412";
export const url=new URL("../icons/logic.svg?v=1c139d025797395a8f721d2005430dbd3349aa38412584f496c435dbaaf4be29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
