export const name="battery_charging_full";
export const id="dl_b9fd2509d28d2ceb981f";
export const url=new URL("../icons/battery_charging_full.svg?v=bb416eb734ede94959f1994c6e2b8fb453d46659fd72eac96a77265574d56f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
