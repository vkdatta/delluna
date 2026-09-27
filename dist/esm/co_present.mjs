export const name="co_present";
export const id="dl_a42c3fb6b8a6084337a9";
export const url=new URL("../icons/co_present.svg?v=9bcbef2cf8ecc20c84ce31fe913d7c65ba97595857c020845bf01acbeefaac25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
