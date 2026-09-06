export const name="battery-vertical-high-fill";
export const id="dl_d72f00cd111a44f2a515";
export const url=new URL("../icons/battery-vertical-high-fill.svg?v=e1fe4b9bd2b60b1b058351fc5dc4b4bb5a07a4973f09cbad5c10b92e01ff23ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
