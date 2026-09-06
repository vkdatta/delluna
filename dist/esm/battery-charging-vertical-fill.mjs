export const name="battery-charging-vertical-fill";
export const id="dl_f2de4d0314e848b4b304";
export const url=new URL("../icons/battery-charging-vertical-fill.svg?v=f346480ca61951ac9beedb75714950d51c0fef66a77e28b981578c868175eddb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
