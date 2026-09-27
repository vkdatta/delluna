export const name="no_adult_content-fill";
export const id="dl_351e17e90213224bbf89";
export const url=new URL("../icons/no_adult_content-fill.svg?v=5678273a7155b2e0d5e317e8227a30cf70bb32fc30ff347cf8d55cbe2364b46a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
