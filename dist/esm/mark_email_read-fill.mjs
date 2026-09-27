export const name="mark_email_read-fill";
export const id="dl_7071b5d848ba5eb8d40d";
export const url=new URL("../icons/mark_email_read-fill.svg?v=ff3a7fde1a922eaafc46331faf3cef7dabe09d4c321f82cc7ee0a6e58f0cc9a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
