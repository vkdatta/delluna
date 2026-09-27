export const name="parallelogram";
export const id="dl_65eabfd299db434b8039";
export const url=new URL("../icons/parallelogram.svg?v=53a244663022b6c9e05b6957cefa8848061d0c522e5a2401e99577e255245fd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
