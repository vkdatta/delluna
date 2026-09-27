export const name="not-subset-of-duotone";
export const id="dl_30f289a7a6b544f58f6f";
export const url=new URL("../icons/not-subset-of-duotone.svg?v=3a7cfaa8e5c21afe43cdd7648e1a3ea7d4e179eebeb1707c46a9e05f2a0743cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
