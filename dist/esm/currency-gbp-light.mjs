export const name="currency-gbp-light";
export const id="dl_3eeb953d14da4bb8993f";
export const url=new URL("../icons/currency-gbp-light.svg?v=bc2c70afd779c986c7389bd7c7b0c8e9798c083f8b2da3085ea4513556c831b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
