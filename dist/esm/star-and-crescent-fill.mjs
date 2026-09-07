export const name="star-and-crescent-fill";
export const id="dl_3aeac20474a34ff58f31";
export const url=new URL("../icons/S/star-and-crescent-fill.svg?v=aee8fda3a0298f2027b6c98aff7afaaf9d830d83f07ef92a4e4dd2d73c65471c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
