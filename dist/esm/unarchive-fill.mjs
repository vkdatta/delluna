export const name="unarchive-fill";
export const id="dl_00fb6a0c6ea8386468ce";
export const url=new URL("../icons/unarchive-fill.svg?v=923ba581e0780c042927b1bb735dca9bc3b41c2d4b2cc657618c4e284a953326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
