export const name="circles_ext";
export const id="dl_f87533870731e0c167c7";
export const url=new URL("../icons/circles_ext.svg?v=575b4fef0bffd3a661633180dd5223f64509ba9630713770bc29cec4df685abe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
