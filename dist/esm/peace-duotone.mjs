export const name="peace-duotone";
export const id="dl_420a4261a58a4571a890";
export const url=new URL("../icons/peace-duotone.svg?v=3766513de723f643857fe06d30c30a67303a02d78960238aec694af395677a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
