export const name="slab_serif";
export const id="dl_ab324b269d90e12238f9";
export const url=new URL('../icons/slab_serif.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
