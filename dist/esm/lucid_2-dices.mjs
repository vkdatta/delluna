export const name="lucid_2-dices";
export const id="dl_d7c4ae3a8d7a400f9c68";
export const url=new URL("../icons/lucid_2-dices.svg?v=a5f07f8869b14f4b890e2acaff16e3eb362608dbef9dd96c4a664348f39ba363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
