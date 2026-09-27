export const name="takeout_dining_2";
export const id="dl_bd1e8197a9f104fce474";
export const url=new URL("../icons/takeout_dining_2.svg?v=7469f70e2569370fff6cf4415828ee0af67873e48f0df06e4e05d5c10cb12314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
