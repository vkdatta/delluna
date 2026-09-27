export const name="trail_length_short-fill";
export const id="dl_1e9378709738b931eaee";
export const url=new URL("../icons/trail_length_short-fill.svg?v=ebb5f532c11d0d108cb0add69c3496ec60645e447cb1d1b186ed03b527ee5241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
