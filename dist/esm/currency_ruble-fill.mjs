export const name="currency_ruble-fill";
export const id="dl_20357e75101a5f6311a5";
export const url=new URL("../icons/currency_ruble-fill.svg?v=d92a692a23aa415230430dd001deec50767076910dc6d9ba529457ed6d8b2c43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
