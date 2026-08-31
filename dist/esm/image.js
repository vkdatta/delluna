export const name="image";
export const id="dl_0e16e918a3710bd22e61";
export const url=new URL('../icons/image.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
