export const name="folder_code-fill";
export const id="dl_4c69f28e744eda22d8bf";
export const url=new URL("../icons/folder_code-fill.svg?v=9688bbb01aeb434ee277bb811713eb25b090e9780b251a42448e66b302a10ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
