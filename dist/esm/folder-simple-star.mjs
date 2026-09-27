export const name="folder-simple-star";
export const id="dl_85ad9cc81fd84f258190";
export const url=new URL("../icons/folder-simple-star.svg?v=9314754a71d0dd527d7002c3f06b32f855ab6d9193b0739965bfa3769da60b6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
