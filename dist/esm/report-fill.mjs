export const name="report-fill";
export const id="dl_c07ea674f5c549c2a9b5";
export const url=new URL("../icons/R/report-fill.svg?v=8fe12c52eddd9f244e5b5f13970b97c795aca5614f63e340b56073fbc6fbe618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
