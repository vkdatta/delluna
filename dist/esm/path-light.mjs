export const name="path-light";
export const id="dl_79730ca9df234178b887";
export const url=new URL("../icons/path-light.svg?v=6f3678bb38ee87d5c1d25f2bd96c95c56fc13337a81a924e216ed08a968718ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
