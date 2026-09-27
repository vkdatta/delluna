export const name="7k_plus-fill";
export const id="dl_6743b27bb0286e7eda95";
export const url=new URL("../icons/7k_plus-fill.svg?v=08d9a9ecc1774aacef8519224d187da6da6de7d748bb55a8a2a8bbad1aa2fd8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
