export const name="mark_email_unread-fill";
export const id="dl_abc71dc900400693d65a";
export const url=new URL("../icons/mark_email_unread-fill.svg?v=b0d5735789d5d74b3911f481b79fec339967c550d417b1e7d25a556fcc6665ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
