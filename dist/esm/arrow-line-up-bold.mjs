export const name="arrow-line-up-bold";
export const id="dl_946916d6bb27459f9a4f";
export const url=new URL("../icons/arrow-line-up-bold.svg?v=7c95d603a4984d6baf47dc78efb50158d30f0ffdf85879279172809b93b7e2d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
