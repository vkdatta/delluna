export const name="arrow-line-right";
export const id="dl_ab38a6e54826459f9a41";
export const url=new URL("../icons/arrow-line-right.svg?v=1cc5c7203d1f17983f51007a85a5e5720b62e549dbbdf0b9d91965258d128f09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
