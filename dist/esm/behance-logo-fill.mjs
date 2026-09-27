export const name="behance-logo-fill";
export const id="dl_f844fed30b2b44dba575";
export const url=new URL("../icons/behance-logo-fill.svg?v=5215d5e5db6f8da9894cd7bf143e481f366ca1c9f5ee199b6398c7549c4f3a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
