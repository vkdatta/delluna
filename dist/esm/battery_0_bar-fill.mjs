export const name="battery_0_bar-fill";
export const id="dl_8de0ed90630279cdc471";
export const url=new URL("../icons/battery_0_bar-fill.svg?v=646b22755dd81250eb42b7512f5806be1df8253836902ce064f6a26cff7a1c64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
