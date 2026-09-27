export const name="sync_desktop";
export const id="dl_55f1ada3123ff179e40b";
export const url=new URL("../icons/sync_desktop.svg?v=f4ca5382a432a35142e02f11490d3e5536890d2025e0d1bbd3f789ddadb6d154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
