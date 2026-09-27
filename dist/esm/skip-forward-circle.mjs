export const name="skip-forward-circle";
export const id="dl_a6ee1f250532e674d32d";
export const url=new URL("../icons/skip-forward-circle.svg?v=3ef2214fd05c282e9050c2ea7f9a450f63ea16c52feb27cd8b104ee72bfdad61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
