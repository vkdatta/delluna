export const name="lucid_3-move-horizontal";
export const id="dl_9879786fd3814a77b1f7";
export const url=new URL("../icons/lucid_3-move-horizontal.svg?v=397abb4c66ed5820849b805521e15f760e7f5e5a48dddf8e8d201f8b8020671c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
