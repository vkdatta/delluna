export const name="metro-fill";
export const id="dl_6631248c60226fbc7aae";
export const url=new URL("../icons/metro-fill.svg?v=669bae84e7f44a267ca5834ee0d3ae7272186068832c4b513808db318f571fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
