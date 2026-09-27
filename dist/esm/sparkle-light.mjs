export const name="sparkle-light";
export const id="dl_7ee155313a29b72338e2";
export const url=new URL("../icons/sparkle-light.svg?v=f33f61dc12c2db7016925303f11cfb15ddc98dc86a4124a344389ffe08e8c504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
