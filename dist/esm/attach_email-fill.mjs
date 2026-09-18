export const name="attach_email-fill";
export const id="dl_54c7d65a4ead463590d6";
export const url=new URL("../icons/attach_email-fill.svg?v=4b6c5590283a4769012a9d1b1c07ce8e54fe2c1ff3495cd3f9ea6484e8dbd757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
