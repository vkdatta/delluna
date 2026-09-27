export const name="user-add";
export const id="dl_b5055e19ebe6623a5eb0";
export const url=new URL("../icons/user-add.svg?v=1e5fbd3f7fd132fa46d1a6fe2bee2bd9b764103a98909730da5435873747cbdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
