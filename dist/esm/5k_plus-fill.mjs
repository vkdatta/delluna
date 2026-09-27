export const name="5k_plus-fill";
export const id="dl_d35831493f3b40d857e6";
export const url=new URL("../icons/5k_plus-fill.svg?v=b0d06ef9b71c88dbab69a2f1e278b4b644ab2ccf37934707349e7ef2a75ff4c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
