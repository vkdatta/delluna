export const name="smiley-angry-duotone";
export const id="dl_dd98de11c7ca4b5ab9d0";
export const url=new URL("../icons/smiley-angry-duotone.svg?v=baf112a9f2a79b239b609c528b38a5286eea3c1b24cf4dd818d4e3380684fee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
