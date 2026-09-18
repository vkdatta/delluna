export const name="folder_supervised";
export const id="dl_95d2ad389837451c9780";
export const url=new URL("../icons/folder_supervised.svg?v=3a7cf6f5d9144ab8f116c9b3602b4b1e179596bc9f8b2d0eccaa457e6abee20d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
