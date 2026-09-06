export const name="lightbulb-filament-fill";
export const id="dl_0106aeda077d41548c40";
export const url=new URL("../icons/lightbulb-filament-fill.svg?v=695dc675a57f9341371195a48df6ec9d5b95cd4c00b6704908ecd3d2dff6881b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
