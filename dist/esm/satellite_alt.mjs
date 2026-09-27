export const name="satellite_alt";
export const id="dl_87b7338ec72359c37da0";
export const url=new URL("../icons/satellite_alt.svg?v=450220b9d11dfb243882e97eaa7b6f57f1db04dc89ce6b8ee7fdc0312f026d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
