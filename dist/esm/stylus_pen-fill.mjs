export const name="stylus_pen-fill";
export const id="dl_ad4546078bc2aa81dd7f";
export const url=new URL("../icons/stylus_pen-fill.svg?v=499585c4ca992b7c4d2421aad8d1312c794cbfe78ec661896185465033d16ba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
