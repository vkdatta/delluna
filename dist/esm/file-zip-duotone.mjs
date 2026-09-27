export const name="file-zip-duotone";
export const id="dl_5d3ce550156347f5ad5a";
export const url=new URL("../icons/file-zip-duotone.svg?v=a83e83a722417eaada57083685c2dbdf4ccac03035bbd504515ff37741c5f54a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
