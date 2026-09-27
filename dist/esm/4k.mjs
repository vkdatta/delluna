export const name="4k";
export const id="dl_3c2ac972f7d24c1e41ec";
export const url=new URL("../icons/4k.svg?v=409d193fd42cddfacdd3621ee70db7de1c24a09221aa955aec5209d8f11eac16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
