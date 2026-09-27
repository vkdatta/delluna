export const name="paint-brush-broad-duotone";
export const id="dl_edde7471edb14cfb9e2a";
export const url=new URL("../icons/paint-brush-broad-duotone.svg?v=cbb66809e0da0f6805e168bf8ca1e5abc5e578d99093dd21285be0124b7a4434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
