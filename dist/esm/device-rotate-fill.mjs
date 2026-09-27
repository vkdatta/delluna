export const name="device-rotate-fill";
export const id="dl_32740c8011364a218534";
export const url=new URL("../icons/device-rotate-fill.svg?v=39b73052a1e6d22c8fb2abd2040e1f298a50e5e45a1cd65ae5f803c28548cadf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
