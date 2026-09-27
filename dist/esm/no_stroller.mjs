export const name="no_stroller";
export const id="dl_8c00e8707758fbe57c10";
export const url=new URL("../icons/no_stroller.svg?v=b1053f0cf014c2532ded70ff10faab2996da993e13e8874fe83dd4d162fb8fbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
