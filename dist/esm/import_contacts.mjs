export const name="import_contacts";
export const id="dl_469f18dbaca37698330f";
export const url=new URL("../icons/import_contacts.svg?v=54730b5938b91e13fddfd0f0c4cfeed6bbde7d0753a53d0d777b0053448ce9e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
