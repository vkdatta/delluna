export const name="car_tag-fill";
export const id="dl_f1b85ee62354d1f2deb3";
export const url=new URL("../icons/car_tag-fill.svg?v=fe6cf1ec6c2cd3ba2ee4870489896d1c57b7469984efafff5b979047b52a9d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
