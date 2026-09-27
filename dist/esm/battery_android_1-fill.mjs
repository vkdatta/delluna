export const name="battery_android_1-fill";
export const id="dl_e9910b84025cee925644";
export const url=new URL("../icons/battery_android_1-fill.svg?v=6e4ceff0034f89fa858a150dc743361f88e477845c898804a7098e3956a00ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
