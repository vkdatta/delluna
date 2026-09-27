export const name="battery_alert";
export const id="dl_6e58a31f13eb34ddf05c";
export const url=new URL("../icons/battery_alert.svg?v=4eaf1b8677d09ddfef631ac67b31c1164f4efebad10ad5c6064220b59f883ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
