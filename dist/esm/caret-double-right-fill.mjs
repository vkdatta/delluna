export const name="caret-double-right-fill";
export const id="dl_ecc2c9c7d4e8497bbc78";
export const url=new URL("../icons/caret-double-right-fill.svg?v=58e7287f903adc40c76f1e42af0bb8dcc9e56de27135a3d84c82d5bad5a62367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
