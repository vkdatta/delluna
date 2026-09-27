export const name="star-of-david-bold";
export const id="dl_7bd5b8551d863d722a41";
export const url=new URL("../icons/star-of-david-bold.svg?v=5b797a1834313c1e7e720ef3d0faa2013d3c3bf507e482e59846cd8b93adea76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
