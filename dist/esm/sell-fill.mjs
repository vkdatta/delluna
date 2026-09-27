export const name="sell-fill";
export const id="dl_30fdc27a31eb28ebd44d";
export const url=new URL("../icons/sell-fill.svg?v=c3128bdec2df22fc5cc6f1deaec112ad9ab7b06b321adb6a53d2d990a1a20df9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
