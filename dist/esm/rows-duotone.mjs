export const name="rows-duotone";
export const id="dl_23b48c6eedfb46e7a3ab";
export const url=new URL("../icons/rows-duotone.svg?v=8ba952d7c3a5a7d5190ea32db05edf2c537227e6c4253fee4fe0ef55ae66022d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
