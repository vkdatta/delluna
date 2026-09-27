export const name="fit_screen-fill";
export const id="dl_a16e9c03463ac8f5a9ba";
export const url=new URL("../icons/fit_screen-fill.svg?v=53d12d4605289e7e246171b09806f31474213013830945a7dfc1cded4f122242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
