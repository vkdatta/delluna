export const name="background_grid_small-fill";
export const id="dl_841d403a3b434310a077";
export const url=new URL("../icons/background_grid_small-fill.svg?v=66ab4468df8505370bc5167af6b7dcb5e592ffb601098c981eeed34a3ca2cbdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
