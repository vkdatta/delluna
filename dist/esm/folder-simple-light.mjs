export const name="folder-simple-light";
export const id="dl_4cef02cea99749139d8d";
export const url=new URL("../icons/folder-simple-light.svg?v=1b799f55cace91f333aef60eceb2970896c9b43c949939c20032802914da22c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
