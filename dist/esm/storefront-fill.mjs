export const name="storefront-fill";
export const id="dl_bfc955bc00b463ce2816";
export const url=new URL("../icons/storefront-fill.svg?v=7d94d9f823d8428d5fa940f89b56a9b20477347c7aa831f0459c58c45a1fbe66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
