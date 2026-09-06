export const name="currency-eur-fill";
export const id="dl_8b00ef08adc74989977a";
export const url=new URL("../icons/currency-eur-fill.svg?v=3cde119984f334b1ab2074005a1fb28fedff6ce7402447510f6a8f53f6df0dfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
