export const name="sd_card_alert-fill";
export const id="dl_bc8f381794cf5d8c6252";
export const url=new URL("../icons/sd_card_alert-fill.svg?v=0bb5cd53306669501d5d6d25e6b2e47d42d2c77b85db51d343d19dd9c7f460a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
