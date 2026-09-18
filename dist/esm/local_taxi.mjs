export const name="local_taxi";
export const id="dl_f794491bc9da4fef9e63";
export const url=new URL("../icons/L/local_taxi.svg?v=1d6b222d86c03f22ba1685d8e6de48eadd8509555b644b385822480353d884c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
