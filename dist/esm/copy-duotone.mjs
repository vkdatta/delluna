export const name="copy-duotone";
export const id="dl_5c99c4d8d75748fa80bf";
export const url=new URL("../icons/copy-duotone.svg?v=587be2bbc922a32b5cbd06d39b04129fae4bd01d9ee240ba86f635f6285902a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
