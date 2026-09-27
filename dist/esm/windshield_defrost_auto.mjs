export const name="windshield_defrost_auto";
export const id="dl_be44b27d6acd1a9fdf16";
export const url=new URL("../icons/windshield_defrost_auto.svg?v=2c18c06da354c440f4429cdfbaf93ffc8dc596a6b7f5c79bef854c0bfa5acf5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
