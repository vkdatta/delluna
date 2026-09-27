export const name="globe-stand-duotone";
export const id="dl_ff74581df9394ae4998f";
export const url=new URL("../icons/globe-stand-duotone.svg?v=bbf58305f7e7f723b42e41118a00426a2f95c2035dd021a1ba40223933d0e1aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
