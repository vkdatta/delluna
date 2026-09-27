export const name="arrow-square-up-left-duotone";
export const id="dl_387c608efbfd4d7b8358";
export const url=new URL("../icons/arrow-square-up-left-duotone.svg?v=3baf4c57a9778cd4f544739bada08d84d2eef103041227900a874eca559e0052",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
