export const name="brush";
export const id="dl_61b7cf81e25ee620901d";
export const url=new URL("../icons/brush.svg?v=aaec1b32097ca12f8e1a676e413974558ec6402a573be61a175fecf1b7fdbe99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
