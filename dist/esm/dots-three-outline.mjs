export const name="dots-three-outline";
export const id="dl_9a944a49afe9401e820a";
export const url=new URL("../icons/dots-three-outline.svg?v=eb96c7c56efa6b3c19ddd4e64565289fa3a403646dffdd86f342834babac2f98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
