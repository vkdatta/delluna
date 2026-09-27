export const name="mark_email_read-fill";
export const id="dl_e3f320e0ca7895e86a3e";
export const url=new URL("../icons/mark_email_read-fill.svg?v=01c3d97f92e0649d71d7082bacaa04fbd15aad729ff736a0701f40212b7b883e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
