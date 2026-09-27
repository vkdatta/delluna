export const name="battery-high-fill";
export const id="dl_bf71c5c484074a6baf02";
export const url=new URL("../icons/battery-high-fill.svg?v=4994b3415e859bcb31c02615a1bb9675f4dafffec3cd18982d362a753fccdfbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
