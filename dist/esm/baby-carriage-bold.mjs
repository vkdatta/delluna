export const name="baby-carriage-bold";
export const id="dl_93c4114e6ce14f7491bd";
export const url=new URL("../icons/baby-carriage-bold.svg?v=0913441c82fae22459ac8fbaa9cbd89a70cac99cc12d8b7c103a3f2752cd05d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
