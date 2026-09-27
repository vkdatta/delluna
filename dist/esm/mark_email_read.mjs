export const name="mark_email_read";
export const id="dl_838152d73e93167aff84";
export const url=new URL("../icons/mark_email_read.svg?v=96e350102a3ac213c91345cd3ce44afb84c281a1a180be8ecd130f3727336923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
