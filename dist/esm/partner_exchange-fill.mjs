export const name="partner_exchange-fill";
export const id="dl_8e463c8595c34f438d9d";
export const url=new URL("../icons/P/partner_exchange-fill.svg?v=2c5c04e71e69aed54008f27f758c5ff139ecca1f21aa8b186ad9d9c0bb776521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
