export const name="on_hub_device-fill";
export const id="dl_498d22d4cbbe8f6d82cc";
export const url=new URL("../icons/on_hub_device-fill.svg?v=1ad2b9e396468e6272cc846d92e219d61c23bcc0d30d89e664cb4ddc99e1952e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
