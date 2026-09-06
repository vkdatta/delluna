export const name="currency-kzt-fill";
export const id="dl_a874104adcd44c4c8d1c";
export const url=new URL("../icons/currency-kzt-fill.svg?v=47fb620f0913639b10f92fa843eec95285d2a57a7d09d81081dfa966e2ed2771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
