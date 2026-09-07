export const name="folder-dashed";
export const id="dl_587e529242864693b01a";
export const url=new URL("../icons/folder-dashed.svg?v=dd95ca166c544355d5daee4258aabf3925c422d8163d2167d8f246fa5eac03fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
