export const name="unlink-2";
export const id="dl_ea682da779fc48fd9d6a";
export const url=new URL("../icons/unlink-2.svg?v=aad7f987d31247b1577559829145dc109a3501ebde1f6ab59bc62d0abd2abd3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
