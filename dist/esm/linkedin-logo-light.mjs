export const name="linkedin-logo-light";
export const id="dl_c7352c2e96df44f7a106";
export const url=new URL("../icons/linkedin-logo-light.svg?v=d9c197e878c8bceb36964125901650b11036e46b680db2736e532236dbf77c8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
