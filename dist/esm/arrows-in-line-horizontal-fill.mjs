export const name="arrows-in-line-horizontal-fill";
export const id="dl_45dd055ccf6f4b888f88";
export const url=new URL("../icons/arrows-in-line-horizontal-fill.svg?v=bafd42f7b13b359558a16af7bd59cb87c543c55a056189cfc4a418fe298f843a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
