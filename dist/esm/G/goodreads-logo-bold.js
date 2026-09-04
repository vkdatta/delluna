export const name="goodreads-logo-bold";
export const id="dl_f971aed657c9405295bc";
export const url=new URL("../../icons/G/goodreads-logo-bold.svg?v=6a0c1135cf3d8457204f748c9435a95fbfab5c35f9adc81b3f169234d9ae5f2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
