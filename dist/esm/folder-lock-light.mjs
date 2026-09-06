export const name="folder-lock-light";
export const id="dl_570756d9a0c6421d8918";
export const url=new URL("../icons/folder-lock-light.svg?v=8709ee15365cf67b9d9fef73e607b301f28b08f7bb35a9eb0a5b04bd2d2029ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
