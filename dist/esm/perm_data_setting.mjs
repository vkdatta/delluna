export const name="perm_data_setting";
export const id="dl_ee8d671e76904ad77964";
export const url=new URL("../icons/perm_data_setting.svg?v=6dccab45a05bb33c1f47932d03b24010e4e8ccccf9d5eaee777b91c5c22d090c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
