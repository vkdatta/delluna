export const name="edit_document-fill";
export const id="dl_ef470eabb3afa4b24ed2";
export const url=new URL("../icons/edit_document-fill.svg?v=3e211a2d25fb309acbe1c5e3e5f450441960ad2e29b627ec2ea5e7b521e1d036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
