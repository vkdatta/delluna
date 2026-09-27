export const name="lucid_1-cloud-backup";
export const id="dl_f0382c20e66c4ad98dff";
export const url=new URL("../icons/lucid_1-cloud-backup.svg?v=58503a53235f24d68e06e6c9718e0a8cbbe57289984c6742c7b76b4d32a8dad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
