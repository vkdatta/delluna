export const name="battery-plus-fill";
export const id="dl_45e532dc2086486085e7";
export const url=new URL("../icons/battery-plus-fill.svg?v=c23d4de9af198eebca324cb0644f5f9101a9907698f1c2b92dcbe8ce917e3736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
