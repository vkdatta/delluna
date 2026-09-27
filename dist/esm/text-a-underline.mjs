export const name="text-a-underline";
export const id="dl_c24817d9d97bdae3c7d3";
export const url=new URL("../icons/text-a-underline.svg?v=bb3e9f22f5fe148d426e6a4b898d297fc8dc7e533964dacca1a3bac0044805d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
