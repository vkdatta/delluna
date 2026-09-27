export const name="file-thin";
export const id="dl_70fe5d294c274d9a8ce4";
export const url=new URL("../icons/file-thin.svg?v=77cbf0d0565c3ec7c795fff9299c7800f9e1db2a16a4c1991df5c4f12bbdae38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
