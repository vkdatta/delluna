export const name="single_bed-fill";
export const id="dl_aa3c23f37993bed2d9c9";
export const url=new URL("../icons/single_bed-fill.svg?v=625a2b7b22db6bcec9c5642672e93462985c70388cc5e561a261a889f75c57b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
