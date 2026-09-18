export const name="perm_scan_wifi";
export const id="dl_76249d48fefd4426a369";
export const url=new URL("../icons/perm_scan_wifi.svg?v=93540eeea26ca857ed65e093374033e8da5f99ccd2563af84cb1880164e92c17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
