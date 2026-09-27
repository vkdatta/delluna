export const name="clock_loader_20-fill";
export const id="dl_d13a4270c9c692eaf88d";
export const url=new URL("../icons/clock_loader_20-fill.svg?v=607e4a9c28bb40bfa6a6134ebdc82aa9518cc3349c9f742e3fbc156589b5c624",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
