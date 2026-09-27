export const name="notifications-fill";
export const id="dl_e1e282c20b607fb3e09d";
export const url=new URL("../icons/notifications-fill.svg?v=7be237119bfe1b1516c90090c69e914fe45b904213e0f9de8e7bf7bfc2617e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
