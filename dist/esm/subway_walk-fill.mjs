export const name="subway_walk-fill";
export const id="dl_1bdb0f1ca85af7474ec0";
export const url=new URL("../icons/subway_walk-fill.svg?v=dad550bad3ee3816e7e95f114b458b904c1db04aea9d306bc423ff4cf03f6941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
