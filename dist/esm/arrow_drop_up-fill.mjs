export const name="arrow_drop_up-fill";
export const id="dl_be5d2445efa145bceaa6";
export const url=new URL("../icons/arrow_drop_up-fill.svg?v=dbdc8a94ed4f5c6f5a33761723f0e22a788b8500159962ce08cacbca304ba2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
