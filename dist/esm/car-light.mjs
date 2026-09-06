export const name="car-light";
export const id="dl_cf0aee569a9341699455";
export const url=new URL("../icons/car-light.svg?v=46f1fb464bf68eba58bada269ea69d3e8b7381ba99f693663b045f223ae35efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
