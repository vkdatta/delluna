export const name="person_check";
export const id="dl_f59f942a6c64c2922a19";
export const url=new URL("../icons/person_check.svg?v=85ab31e5239155034016466ccd436c7bff1918235e0245cd0d6009601d2df21b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
