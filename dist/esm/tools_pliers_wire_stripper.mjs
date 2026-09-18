export const name="tools_pliers_wire_stripper";
export const id="dl_5c98a432be74401498ef";
export const url=new URL("../icons/tools_pliers_wire_stripper.svg?v=6c8940f15bfc352f5abe31026d708ee9fc72066ea71b84862ae0eda1e4f13e2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
