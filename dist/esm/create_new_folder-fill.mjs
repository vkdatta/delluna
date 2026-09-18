export const name="create_new_folder-fill";
export const id="dl_9a00bb9dece145249f19";
export const url=new URL("../icons/create_new_folder-fill.svg?v=f40473ab2be669f11b1d4c37b299f2f6cb3ae1ffde11f495a1417a62ff63fe8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
