export const name="phone-bold";
export const id="dl_c49d06e24e954fb7a45f";
export const url=new URL("../icons/phone-bold.svg?v=1ac127de14ace3da1f779cfa4fe3b93d4eef459d5926a5eebbb08a66ee6ab83a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
