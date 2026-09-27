export const name="energy_savings_leaf-fill";
export const id="dl_7c78820ff02cfef19b80";
export const url=new URL("../icons/energy_savings_leaf-fill.svg?v=53a955ae8dc4f71801700486ae9a5ecf406e22cefce01987229d1b76c0916dc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
