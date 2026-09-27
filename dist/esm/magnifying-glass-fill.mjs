export const name="magnifying-glass-fill";
export const id="dl_8fe1e0419be44cb39cbd";
export const url=new URL("../icons/magnifying-glass-fill.svg?v=e64061a9a5922806c9b5118da24799e1fb1c71c8e99f57b280a9a734b263a7c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
