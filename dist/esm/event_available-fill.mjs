export const name="event_available-fill";
export const id="dl_c8583f8c17934b6c9137";
export const url=new URL("../icons/event_available-fill.svg?v=5a7554efb0c478457476fb729e8c9761cb3725751ad39e7a52ce36f76b138750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
