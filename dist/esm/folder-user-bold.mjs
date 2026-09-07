export const name="folder-user-bold";
export const id="dl_57b3c2551c6449caa02c";
export const url=new URL("../icons/folder-user-bold.svg?v=cef281eb49804722c989f1575c310455202d2eced9b54bfb72cefcf37330504e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
