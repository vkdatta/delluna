export const name="currency-kzt";
export const id="dl_48b2ee55d2834751a55f";
export const url=new URL("../icons/currency-kzt.svg?v=3217b99929cec5f600e9760aeaf7d402a40b63293f6c40269670d359320bb36e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
