export const name="vegan";
export const id="dl_2cc53eda50f94ec6911f";
export const url=new URL("../../icons/lucid_4/vegan.svg?v=6200ac06291b71a69cc68c32bf82a690aa31c77d537a4b65f238a9ddc0a0d3b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
