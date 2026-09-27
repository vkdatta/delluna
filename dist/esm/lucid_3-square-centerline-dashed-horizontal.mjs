export const name="lucid_3-square-centerline-dashed-horizontal";
export const id="dl_31bf86d656234bc38f80";
export const url=new URL("../icons/lucid_3-square-centerline-dashed-horizontal.svg?v=9289262e861e24d9b59bf5564d9ebd3ffeed8a830d1893ad90c9c4bb54574e97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
