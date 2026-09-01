export const name="link";
export const id="dl_2e34914f4c1a9cf9c705";
export const url=new URL('../icons/link.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
