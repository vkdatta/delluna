export const name="lucid_1-cloud-backup";
export const id="dl_f0382c20e66c4ad98dff";
export const url=new URL("../icons/lucid_1-cloud-backup.svg?v=639c740dd56e547f6ae2ab83f763c34d0d364133936ccb03399596e33fa4e47a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
