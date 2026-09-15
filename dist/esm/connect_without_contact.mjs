export const name="connect_without_contact";
export const id="dl_a208b806082942e5afb2";
export const url=new URL("../icons/C/connect_without_contact.svg?v=7241197f748f040155964f856e570dbc367a1f7330d2c63741339bc5661a9c0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
