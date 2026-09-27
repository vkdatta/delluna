export const name="line_start_arrow-fill";
export const id="dl_6b16f94e3691417e62c3";
export const url=new URL("../icons/line_start_arrow-fill.svg?v=f172ba9a8a96e27b1f33dec621a42e9c87ea295df26474ac6c831c02686c44f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
