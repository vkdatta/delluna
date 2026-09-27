export const name="expand_less";
export const id="dl_47f77e91c0346c6983bb";
export const url=new URL("../icons/expand_less.svg?v=39496851c9839ba5320d5d58e7a4c800d7dad24b2b6c498f6138a846f16cf26e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
