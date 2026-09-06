export const name="folder-dashed-thin";
export const id="dl_509c7122c8024790a2f9";
export const url=new URL("../icons/folder-dashed-thin.svg?v=d8690ac653e88a18b283fc11b96f5c32522871a4bac6e6051e558f48b60d264f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
