export const name="heat_pump-fill";
export const id="dl_a67fe02029a044da9094";
export const url=new URL("../icons/heat_pump-fill.svg?v=4c6de9a6327aeedfcc11532c4c39411283794f52dad22e4115bd6cc962e85b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
