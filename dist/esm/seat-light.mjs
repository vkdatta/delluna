export const name="seat-light";
export const id="dl_14ac573a8ae344aa9efa";
export const url=new URL("../icons/S/seat-light.svg?v=65b0a53a33043cc91e424b2be1f9ae38d424007609180b66f220ab947ef3cf98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
