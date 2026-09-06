export const name="file-x-light";
export const id="dl_1aadcea6bb2c4c25b3e7";
export const url=new URL("../icons/file-x-light.svg?v=c881f8c0eeb4e3d0ec4dce03204fdcf4511f3ed098fc3dc8b9a96feeed1f2421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
