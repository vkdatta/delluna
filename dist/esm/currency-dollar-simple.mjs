export const name="currency-dollar-simple";
export const id="dl_051c676ca67343f99f4f";
export const url=new URL("../icons/currency-dollar-simple.svg?v=96c08e03af6bb6f0eb58eee768f168fe1c10d8d6ce9366525c22dfb2db8b4000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
