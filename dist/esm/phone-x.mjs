export const name="phone-x";
export const id="dl_96e249c6044a4df2b07f";
export const url=new URL("../icons/phone-x.svg?v=ef966e922e6c62da38f4170354226b52715e5b1de38dc64966450f40d1247f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
