export const name="caret-right-bold";
export const id="dl_c1fa855f6b58464a97de";
export const url=new URL("../icons/caret-right-bold.svg?v=03cadd956d715541432ec8dc2eda1c53ca341af7d3ccecb8dd32c5b9747e290f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
