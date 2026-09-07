export const name="bread-bold";
export const id="dl_f498f39ccf9044908875";
export const url=new URL("../icons/bread-bold.svg?v=48c6d945ee60d83d5458421fb14e8d3779cac775f2146879d9a27cafaa984021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
