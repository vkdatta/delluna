export const name="phone-outgoing-bold";
export const id="dl_db25f6b45700428eb37b";
export const url=new URL("../icons/phone-outgoing-bold.svg?v=8d24e5140a5ad90c57b1995370b293460d2e6f66ec0bf9cae79fa83fca6dddb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
