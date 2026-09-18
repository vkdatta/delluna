export const name="menstrual_health-fill";
export const id="dl_f8bae0e2182f4d27babd";
export const url=new URL("../icons/M/menstrual_health-fill.svg?v=d5ea7643b2f9012894067f2fc7afe924de6c2f59b4186a8b16207f1832bb84cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
