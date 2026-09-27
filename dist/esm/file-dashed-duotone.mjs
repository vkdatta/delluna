export const name="file-dashed-duotone";
export const id="dl_8147ff17fd2a4bbc8d17";
export const url=new URL("../icons/file-dashed-duotone.svg?v=cd657b2d229a397d81263656492d7e596ded53ec0ad5803910072a8ebdc8c61a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
