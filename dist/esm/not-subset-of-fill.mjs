export const name="not-subset-of-fill";
export const id="dl_5efefad7de73453f9fb9";
export const url=new URL("../icons/not-subset-of-fill.svg?v=13d543c32f0466ccffd26d1dfb2f036ac26520375cc2aa81ba13819cea2e560b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
