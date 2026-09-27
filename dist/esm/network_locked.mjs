export const name="network_locked";
export const id="dl_654b947add7bed2364b9";
export const url=new URL("../icons/network_locked.svg?v=729bd440d41bcb4adc0f5d2adb98d2a3cc1f90693a6d44332d09f8352eca9274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
