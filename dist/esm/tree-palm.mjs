export const name="tree-palm";
export const id="dl_5232e0be5c7b4289ae21";
export const url=new URL("../icons/tree-palm.svg?v=9ff76ce499e348b5b810778ea8fc8e06d52748adc182f421c9bf34c835292d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
