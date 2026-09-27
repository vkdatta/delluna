export const name="currency_rupee_circle";
export const id="dl_8724f2f8cd91f2b93962";
export const url=new URL("../icons/currency_rupee_circle.svg?v=36828d282bd8ec5fec9b320ed32d0aff0cf9bed2bf3fbaec4c31b44042156008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
