export const name="trophy-thin";
export const id="dl_c6a363636734ebcbcbbf";
export const url=new URL("../icons/trophy-thin.svg?v=6557ebd3f5a524d887989d90474e50e65ae87279ce0aff6b7a19c241c62d8ff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
