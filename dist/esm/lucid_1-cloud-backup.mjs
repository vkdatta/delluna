export const name="lucid_1-cloud-backup";
export const id="dl_f0382c20e66c4ad98dff";
export const url=new URL("../icons/lucid_1-cloud-backup.svg?v=347c28c59a676525ab79ca27cb789227358f558d78ba813f4d8894713cce57bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
