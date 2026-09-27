export const name="endocrinology";
export const id="dl_53cccd590888cba2990f";
export const url=new URL("../icons/endocrinology.svg?v=0aa7169ca0880c2d47981ea03e27218a42e24ecdd7f8affccf16a5d9dc783a03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
