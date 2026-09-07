export const name="baby-carriage-duotone";
export const id="dl_1191d3caadc74828b04b";
export const url=new URL("../icons/baby-carriage-duotone.svg?v=475f215a9061f77a4155f2af1edbddb03b15a4dd45850c72e5453238f2b7c53f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
