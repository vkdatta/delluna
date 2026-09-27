export const name="splitscreen_landscape_add-fill";
export const id="dl_e4c8b845ec92df97174a";
export const url=new URL("../icons/splitscreen_landscape_add-fill.svg?v=410a63d5242b5a00c9664f76421b946d9af8eb66e24bf56423163cf57d730bf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
