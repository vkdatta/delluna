export const name="webhook-fill";
export const id="dl_2e977a02ba276687ea8f";
export const url=new URL("../icons/webhook-fill.svg?v=33e9c139841c6eea9cd1fcd522a92f1b241e5ec64022435a0bac285a63a671f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
