export const name="shield_person";
export const id="dl_0df8953654f3e0266c63";
export const url=new URL("../icons/shield_person.svg?v=834619dff081047e7ff8a159c1a63f480ff42b704e69ab67ecfae685122c1af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
