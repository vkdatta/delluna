export const name="warning_off-fill";
export const id="dl_7be914d796d643098619";
export const url=new URL("../icons/warning_off-fill.svg?v=b8076e7800cca3d7d37b493b1f0937d83da82f189c89e8de09647785de63d3f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
