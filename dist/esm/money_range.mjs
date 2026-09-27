export const name="money_range";
export const id="dl_630fc88fd97867c2d985";
export const url=new URL("../icons/money_range.svg?v=5b1c1a40f0224c6024b5a001ffdf25b2f7b29705a74998b13e188fc19dbedfd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
