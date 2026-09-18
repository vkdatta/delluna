export const name="encrypted_add_circle-fill";
export const id="dl_50ddd05522454197a2d7";
export const url=new URL("../icons/encrypted_add_circle-fill.svg?v=1b4ed4d2af38b02cdb900b457a0f8d82398954e95f72e5f4d293d044c483932b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
