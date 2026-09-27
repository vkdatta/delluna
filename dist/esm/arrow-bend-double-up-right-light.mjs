export const name="arrow-bend-double-up-right-light";
export const id="dl_3792b9dfc8ae4599b25b";
export const url=new URL("../icons/arrow-bend-double-up-right-light.svg?v=431fb97f4da233e0e31056265e9114ff4703d9fb09be40c71ff6ba7232f0570d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
