export const name="battery_horiz_000";
export const id="dl_e14e54e939cb46335aa1";
export const url=new URL("../icons/battery_horiz_000.svg?v=afccacc20f3fe10af57758a91662cf5cb88cb1765b3950ee11d2617f142506cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
