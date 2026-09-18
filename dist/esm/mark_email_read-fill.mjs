export const name="mark_email_read-fill";
export const id="dl_919012ac07904deaa6d1";
export const url=new URL("../icons/mark_email_read-fill.svg?v=01c3d97f92e0649d71d7082bacaa04fbd15aad729ff736a0701f40212b7b883e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
