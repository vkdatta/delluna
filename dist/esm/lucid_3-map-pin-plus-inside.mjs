export const name="lucid_3-map-pin-plus-inside";
export const id="dl_6ceee32f84b9495e9bcc";
export const url=new URL("../icons/lucid_3-map-pin-plus-inside.svg?v=0bd8e8251e0645e2185de402e07c5ffe4433e8dcd7156092f9c1ddfa574cb15f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
