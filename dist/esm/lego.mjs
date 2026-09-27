export const name="lego";
export const id="dl_0d13cea0253144d09466";
export const url=new URL("../icons/lego.svg?v=29ac25d093c038c30f6d20669df26877cd39958c56f4860505c3ce5652aa1ddb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
