export const name="battery_charging_50_2-fill";
export const id="dl_c97d48f0af37053c8591";
export const url=new URL("../icons/battery_charging_50_2-fill.svg?v=5b9e239c48c6864d4f932257ea4820068a72932d60663a426165b07c93c0059f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
