export const name="lucid_3-move-horizontal";
export const id="dl_9879786fd3814a77b1f7";
export const url=new URL("../icons/lucid_3-move-horizontal.svg?v=1bf3d876bd749ea3beb19973f2e79ede736eeff2db901b9d6944b2f68e0e4988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
