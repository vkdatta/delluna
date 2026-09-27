export const name="ramen_dining-fill";
export const id="dl_b841e12682ea5ef50f76";
export const url=new URL("../icons/ramen_dining-fill.svg?v=7112d2a98b5cdcec9a7ff15cad0e3669a2ce0674af0aae034ada926ba10bf6cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
