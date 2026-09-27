export const name="print_error-fill";
export const id="dl_489deef905a8aa506472";
export const url=new URL("../icons/print_error-fill.svg?v=bc1a6c37f3bc4ed525316f3af53fbf760ef9bdc5e42e97428492f3795a7bbc14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
