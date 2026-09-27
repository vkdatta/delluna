export const name="bento-fill";
export const id="dl_7fc2be42dd05bd43505c";
export const url=new URL("../icons/bento-fill.svg?v=d644e15848dff9265629ebd9ec0e393b3c4e965cd70538614c862376f3fcd741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
