export const name="handshake";
export const id="dl_77760761e7bb40c2b890";
export const url=new URL("../icons/handshake.svg?v=620a2394b8ea5a146bc73997872e7a6479cda2c452ea3dba56fba0b1181dd341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
