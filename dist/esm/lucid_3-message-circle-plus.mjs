export const name="lucid_3-message-circle-plus";
export const id="dl_39f9f84326994cb7bddb";
export const url=new URL("../icons/lucid_3-message-circle-plus.svg?v=5ce50772e25b3d0f6c27342222faf1f4dcc1f04b9017b09541dfaf4428a354b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
