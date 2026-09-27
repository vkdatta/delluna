export const name="backlight_low-fill";
export const id="dl_ce296e7f9e0391c93f76";
export const url=new URL("../icons/backlight_low-fill.svg?v=ca317a90430be69d0a866c541f79061418f306c5f55460479fdc5f7a28a01c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
