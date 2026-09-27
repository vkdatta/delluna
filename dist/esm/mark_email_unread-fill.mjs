export const name="mark_email_unread-fill";
export const id="dl_dfe68f352e13782f81f9";
export const url=new URL("../icons/mark_email_unread-fill.svg?v=ee781cca70622f785b5f0f0771fadd85b7351bc2ec8ac135cfd977d1aaa20dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
