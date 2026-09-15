export const name="display_external_input";
export const id="dl_f42cb5a8593848ada872";
export const url=new URL("../icons/D/display_external_input.svg?v=150f6633f1a8a327e21311336fb1b75ea4c9639699a3bcd82d7ddd62a2d28eda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
