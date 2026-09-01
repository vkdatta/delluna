export const name="apps";
export const id="dl_fcc2ca335c731b35c959";
export const url=new URL('../icons/apps.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
