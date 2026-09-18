export const name="imagesearch_roller-fill";
export const id="dl_6ef86bdac83b48c79678";
export const url=new URL("../icons/imagesearch_roller-fill.svg?v=bad3ccae200921d7f01a16dad8919c49385527d2a7f898d697218eb7f111cc2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
