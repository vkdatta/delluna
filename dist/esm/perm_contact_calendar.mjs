export const name="perm_contact_calendar";
export const id="dl_57d685d189ebc2ffdff1";
export const url=new URL("../icons/perm_contact_calendar.svg?v=7d2a2b2c0c04b7a6d3ce229c7d70d1e604beaf16e1480913087578251a2a1436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
