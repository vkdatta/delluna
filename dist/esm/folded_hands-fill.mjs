export const name="folded_hands-fill";
export const id="dl_b9a906e274c33090425b";
export const url=new URL("../icons/folded_hands-fill.svg?v=9cfc5d0ee93e3c3d507b6d695ca365aeb52904249a343b248bda1cb348370ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
