export const name="lego-duotone";
export const id="dl_bfdb6e33a85443c490d6";
export const url=new URL("../../icons/L/lego-duotone.svg?v=f6b2d7d10fe8b520c9e51f9df413e63b68e0712685e311b573a540b501eb398f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
