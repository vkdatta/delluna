export const name="battery_3_bar-fill";
export const id="dl_f0c9f4ad4b960c3b5e1c";
export const url=new URL("../icons/battery_3_bar-fill.svg?v=00482e337777037a826252fb272fdfe3d14bb62d383dde2bea243004a2c494c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
