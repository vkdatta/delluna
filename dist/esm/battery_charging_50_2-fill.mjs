export const name="battery_charging_50_2-fill";
export const id="dl_5bc090ec2643f328ae63";
export const url=new URL("../icons/battery_charging_50_2-fill.svg?v=c2d5b7d5f8aad2251b5e78be5cfe16ae2013fc9d736aa0d446571d453eb670ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
