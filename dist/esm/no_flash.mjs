export const name="no_flash";
export const id="dl_3cfa8ddf7a4c413595d5";
export const url=new URL("../icons/no_flash.svg?v=fbd38a483d7455672fad02129464c9420cfd0ea39b47b3a96f05de37881986bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
