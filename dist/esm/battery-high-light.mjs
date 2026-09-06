export const name="battery-high-light";
export const id="dl_478355b9f496425898e4";
export const url=new URL("../icons/battery-high-light.svg?v=88f10f985249267417fdb7686ea636843f5a1abcc24b833a0be55be41cc014b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
