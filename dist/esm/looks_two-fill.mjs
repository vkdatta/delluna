export const name="looks_two-fill";
export const id="dl_3caef5f6f275f9f5fd6e";
export const url=new URL("../icons/looks_two-fill.svg?v=c85e6db5a673c463e72df824740a858f2ff3e57e64c989b2b5248cde2834b622",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
