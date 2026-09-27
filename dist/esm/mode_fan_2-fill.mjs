export const name="mode_fan_2-fill";
export const id="dl_27d802edd947d3a4abf9";
export const url=new URL("../icons/mode_fan_2-fill.svg?v=540aac0f6c58e03977c8e649491ba42ed396971d77d3dc9436786362402481bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
