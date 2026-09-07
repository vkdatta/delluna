export const name="lucid_2-crop";
export const id="dl_2a265be51fa14db5aa32";
export const url=new URL("../icons/lucid_2-crop.svg?v=a2d3a87a6c755eafc7118d1357bffd23c119b8be2ecbaa7c6b231edfffbdc79d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
