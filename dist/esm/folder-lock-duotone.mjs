export const name="folder-lock-duotone";
export const id="dl_f0d2ca8fe34d40058823";
export const url=new URL("../icons/folder-lock-duotone.svg?v=61dbf02d9adbeacc5d183f1db3535c31aff19d2e78c4cd334aa6b362bc8f7eb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
