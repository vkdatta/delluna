export const name="battery-charging-bold";
export const id="dl_62119fb8cb4540608318";
export const url=new URL("../icons/battery-charging-bold.svg?v=b738f2c9d148b540b4b2a73260b346e2fd4aad847470e18028f10b91c4a9e7db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
