export const name="currency-krw-bold";
export const id="dl_d235f91e8dc84920bf63";
export const url=new URL("../icons/currency-krw-bold.svg?v=9498d44776c7181b1ba00ba28f9dd11eeaa2d46ebcaa2259fd1ecd41b9cb4a4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
