export const name="receipt_long-fill";
export const id="dl_f6af27c79d14216b1409";
export const url=new URL("../icons/receipt_long-fill.svg?v=094d0e983b36f932e1b0f2f8d03874c802646596c781f4eabc319c99ecae0cdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
