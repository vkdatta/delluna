export const name="fork-knife-fill";
export const id="dl_78e1b7a60d74405fbef9";
export const url=new URL("../icons/fork-knife-fill.svg?v=05598bc801d30cf7a87cd9485b5c008ca95ef3e22ba1928c21ecc5b9e620989e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
