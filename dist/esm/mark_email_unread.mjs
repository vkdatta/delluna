export const name="mark_email_unread";
export const id="dl_ae9e0f78a72113cbc21c";
export const url=new URL("../icons/mark_email_unread.svg?v=fc347b807305205fc7df98ee7946e7b2a3c5cd82951dcd806dca96a6053d3ca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
