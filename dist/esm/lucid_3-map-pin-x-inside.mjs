export const name="lucid_3-map-pin-x-inside";
export const id="dl_c94b2d5ba43f49cfbaf2";
export const url=new URL("../icons/lucid_3-map-pin-x-inside.svg?v=2d175abd0f2410016b88f433084cdf52eef7313c87e4ea084dbfc0671b706ad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
