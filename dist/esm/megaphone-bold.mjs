export const name="megaphone-bold";
export const id="dl_61d93709300043718f7f";
export const url=new URL("../icons/megaphone-bold.svg?v=26e8e06b497de056bf0463c31f16113ddad592b81fa5e5b90bf950bf7be4ab13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
