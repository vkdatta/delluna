export const name="battery_full_alt-fill";
export const id="dl_6780e8cd364c4e6e9553";
export const url=new URL("../icons/battery_full_alt-fill.svg?v=d59ef7464976f8ecd2442dae18c1b42f8358716d5a2c1ba8721d16635b8e41ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
