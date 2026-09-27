export const name="battery-vertical-high-light";
export const id="dl_1be1a391a1464e2ebff4";
export const url=new URL("../icons/battery-vertical-high-light.svg?v=9286dd98d2d2e4db4e3058b66ed3fc9684dd442696938fa2eef49c0456e0ea4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
