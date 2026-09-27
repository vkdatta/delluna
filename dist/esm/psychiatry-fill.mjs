export const name="psychiatry-fill";
export const id="dl_18594e72a552828e23af";
export const url=new URL("../icons/psychiatry-fill.svg?v=50886f0b184d57351241a81ba0a96d44ccdfb082cecd9335511844f8bb996dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
