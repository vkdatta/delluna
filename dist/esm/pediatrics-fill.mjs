export const name="pediatrics-fill";
export const id="dl_f8b541a29aa8c9e1d6a0";
export const url=new URL("../icons/pediatrics-fill.svg?v=448113325e9f07056b53205694a146beb98ccc2f8ad2f4093d84a2f45878e007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
