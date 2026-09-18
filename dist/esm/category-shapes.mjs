export const name="category-shapes";
export const id="dl_c3705376233e4c999315";
export const url=new URL("../icons/category-shapes.svg?v=53cc8ca512a53f641449d27e4a9f29c469beeac19effcc009edcd18e993439c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
