export const name="grid_on";
export const id="dl_20738323d89855d9c51c";
export const url=new URL("../icons/grid_on.svg?v=7b444249d341574581aa61f060e882afea51230196b2f361724ae77964c81791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
