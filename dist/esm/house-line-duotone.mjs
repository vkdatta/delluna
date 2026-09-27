export const name="house-line-duotone";
export const id="dl_b54d4ae6f7bb4cfba143";
export const url=new URL("../icons/house-line-duotone.svg?v=40f13f2d134c1276a1081371120ed85d12cce31a4bbf914590a132fc0b20f462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
