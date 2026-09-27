export const name="folder-user-fill";
export const id="dl_eb0b5c44003c4c0a81cd";
export const url=new URL("../icons/folder-user-fill.svg?v=742cadb13b16ce9b572b3ad2b689a5b6f379b04b5f0a05821cf7a935eb7589b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
