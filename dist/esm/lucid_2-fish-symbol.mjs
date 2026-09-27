export const name="lucid_2-fish-symbol";
export const id="dl_fe0b1ea082ee4fe99cbc";
export const url=new URL("../icons/lucid_2-fish-symbol.svg?v=4ffd78e68835287e13fdcaf40fc4947419ef6d32729ebfa24b24e13510bc8784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
