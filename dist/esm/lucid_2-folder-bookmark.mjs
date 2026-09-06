export const name="lucid_2-folder-bookmark";
export const id="dl_d2ab403ad6dc4e008491";
export const url=new URL("../icons/lucid_2-folder-bookmark.svg?v=5180cbbe6386fa145c543572afb5b9980a085b01d366648cfc70a24bf697d4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
