export const name="shuffle-simple-light";
export const id="dl_3fe11d50bc10ef449921";
export const url=new URL("../icons/shuffle-simple-light.svg?v=d0265ba2da1226334e5dc9d6b8bc8faa9b4e698508f0d1f209c71759558f1173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
