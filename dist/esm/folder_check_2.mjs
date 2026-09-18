export const name="folder_check_2";
export const id="dl_4f0d9cb179b14e03985c";
export const url=new URL("../icons/folder_check_2.svg?v=da4d856fcc5a46d8627ee8b83bea90707cd60e655b708c9510b2ea28d9b0ef95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
