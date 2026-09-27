export const name="nest_clock_farsight_digital-fill";
export const id="dl_40159e2bb64f117001ce";
export const url=new URL("../icons/nest_clock_farsight_digital-fill.svg?v=6e7d2f4cff044c239d96451747d7efd3762bd8d210e70a05f2db92bf445c0749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
