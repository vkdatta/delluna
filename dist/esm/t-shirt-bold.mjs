export const name="t-shirt-bold";
export const id="dl_6f4f02b5fdd04d7fb9c1";
export const url=new URL("../icons/T/t-shirt-bold.svg?v=ac5d0c01103ae6bd62f9305174762af909474434715d2cc0ce66f56421c25610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
