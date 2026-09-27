export const name="prescriptions";
export const id="dl_778b3b35a54c4b988361";
export const url=new URL("../icons/prescriptions.svg?v=508a02b64dbf39f40092995ef104fe019339b26e91095f25dfb60062cff5bed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
