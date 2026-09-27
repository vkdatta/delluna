export const name="edit_notifications-fill";
export const id="dl_e7edc9d4b5b0bf2f1431";
export const url=new URL("../icons/edit_notifications-fill.svg?v=57eeedebfcaaa618a0c64867a613c6b7f7dd594c34a0022e0a2e062157ac2070",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
