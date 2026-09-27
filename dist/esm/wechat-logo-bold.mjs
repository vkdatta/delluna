export const name="wechat-logo-bold";
export const id="dl_661c83e45cba8f14acf0";
export const url=new URL("../icons/wechat-logo-bold.svg?v=619505b26623169a452a5b396cbeb016a4c56d6d9c073162517d4c8052a3155f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
