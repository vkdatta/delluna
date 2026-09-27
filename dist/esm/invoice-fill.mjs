export const name="invoice-fill";
export const id="dl_afc7bcd3365c4b9c8336";
export const url=new URL("../icons/invoice-fill.svg?v=e008fec74783fde98c357f29ace73b88d2c7f1ff3773871420247039a986566c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
