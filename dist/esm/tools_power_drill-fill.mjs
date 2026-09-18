export const name="tools_power_drill-fill";
export const id="dl_ddb356c5f4e645908716";
export const url=new URL("../icons/T/tools_power_drill-fill.svg?v=0092eb24fb346a89af1dc3d15ec5cef5379b7b1bd37e69d62fb29f78ec84cee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
