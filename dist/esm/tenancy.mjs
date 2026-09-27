export const name="tenancy";
export const id="dl_837ceac7f19704db1ea2";
export const url=new URL("../icons/tenancy.svg?v=fc3bb3304360193eed9ed00256ce92773741a0965abaeefe419cb036c8a4e70b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
