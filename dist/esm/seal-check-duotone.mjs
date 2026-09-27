export const name="seal-check-duotone";
export const id="dl_5b3802e6eab485b93f2b";
export const url=new URL("../icons/seal-check-duotone.svg?v=c395112d307a7463dc74fb9a1c75756e4898524a761160bdb1e6af96c61ace02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
