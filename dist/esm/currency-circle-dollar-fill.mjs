export const name="currency-circle-dollar-fill";
export const id="dl_90f7938a8ad642f9af00";
export const url=new URL("../icons/currency-circle-dollar-fill.svg?v=e3527f42c6e6f24f20ddfac0b6e641b8e666ed9b72f9586eaac264b344f8f4dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
