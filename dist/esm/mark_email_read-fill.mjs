export const name="mark_email_read-fill";
export const id="dl_01913ed5ff6e6715f53e";
export const url=new URL("../icons/mark_email_read-fill.svg?v=cee57cf5c8236e0f42d99dd5c9b45c0af19405dba43a29ca79f66fb4c91f5e85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
