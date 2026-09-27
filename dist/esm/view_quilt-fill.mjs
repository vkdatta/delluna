export const name="view_quilt-fill";
export const id="dl_1a991503ed9efad9f9e5";
export const url=new URL("../icons/view_quilt-fill.svg?v=901da81b9c1ca1329f0e17a268095b979b7fc8bd530883bf3cc2510f668c7990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
