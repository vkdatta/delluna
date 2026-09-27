export const name="edit_attributes";
export const id="dl_1b54013fe112290dd74b";
export const url=new URL("../icons/edit_attributes.svg?v=be857e647179295ee4bafb8af245a564541a16f894cb6a013ea1855442acdf1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
