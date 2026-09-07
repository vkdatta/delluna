export const name="chair-fill";
export const id="dl_c4de70eeb3684a7ca2f5";
export const url=new URL("../icons/chair-fill.svg?v=238f0d0c8c9ac443b074d7128c9d016f5a85f4aed10d812d272dde87d4ff32e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
