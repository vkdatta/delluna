export const name="contacts-fill";
export const id="dl_367ee7dbbefa64c48061";
export const url=new URL("../icons/contacts-fill.svg?v=c5c4f2d9027228dbd2f1d6ac3335d8cc1215c108e02a5a7bb37c112aa271f0d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
