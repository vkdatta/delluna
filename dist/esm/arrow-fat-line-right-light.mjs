export const name="arrow-fat-line-right-light";
export const id="dl_3636d28fe73e4374b23b";
export const url=new URL("../icons/arrow-fat-line-right-light.svg?v=014147da9cc8b3751139228bae2db90cf16e9d148d1036494e837742f4a5096a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
