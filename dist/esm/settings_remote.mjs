export const name="settings_remote";
export const id="dl_9b6eeda92661492a865b";
export const url=new URL("../icons/settings_remote.svg?v=fec5bbf61d26ceba653ecd76103d38ecd5bb18b89487824623c7074794ea6848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
