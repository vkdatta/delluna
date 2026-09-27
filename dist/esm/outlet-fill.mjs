export const name="outlet-fill";
export const id="dl_411e700fd00b1eebd5cf";
export const url=new URL("../icons/outlet-fill.svg?v=0e20dd27e7cda3448c20bc2bf0afbd8f404a9eab131b48462bd0e5bbb28cbcfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
