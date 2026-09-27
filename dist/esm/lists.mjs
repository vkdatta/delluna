export const name="lists";
export const id="dl_84328ffc1200de6c7f0b";
export const url=new URL("../icons/lists.svg?v=f8a65d5a556a1bc8f11989c3a7a0f03fd73a9cfcad679f7bd70a4a4866cc5893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
