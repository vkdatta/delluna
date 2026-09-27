export const name="nest_wifi_router";
export const id="dl_4ff3779dfcc567b9f9a4";
export const url=new URL("../icons/nest_wifi_router.svg?v=a4718490944f8acc6439b1b3b14490ad3412be7fbca4cf78b653ad0b304a571d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
