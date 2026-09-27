export const name="import_contacts";
export const id="dl_469f18dbaca37698330f";
export const url=new URL("../icons/import_contacts.svg?v=710df38f820dd08c6b56c753ccbdc50412988dae8821aba5e9e4ecb541983467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
