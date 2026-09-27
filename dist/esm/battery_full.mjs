export const name="battery_full";
export const id="dl_17f6c18f0d94b867e185";
export const url=new URL("../icons/battery_full.svg?v=0b972deee42ad294770fd226e8fa6290d1bc3025cc6c5c0154638a3250a97d63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
