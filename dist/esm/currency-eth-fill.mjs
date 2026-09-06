export const name="currency-eth-fill";
export const id="dl_7540f0f0faae4d2daaf4";
export const url=new URL("../icons/currency-eth-fill.svg?v=497057c19cf88fd4d79c1fac7d19b36456fe4a076e618100d2fb676ed2081350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
