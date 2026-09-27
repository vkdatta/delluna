export const name="lucid_3-save-off";
export const id="dl_3f8f55d88d044b498ab4";
export const url=new URL("../icons/lucid_3-save-off.svg?v=48dafb2eae4babda1b070023f1b834d866d7b30ea37a9a765191bc5d29cc5de4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
