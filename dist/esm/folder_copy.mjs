export const name="folder_copy";
export const id="dl_bc0281a9ce8f56c0064f";
export const url=new URL("../icons/folder_copy.svg?v=fd57ba6c96ebaa3654f47216b524ad4b9ad41831aad8b9bdeb1945fc42964258",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
