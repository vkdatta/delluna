export const name="currency-circle-dollar-bold";
export const id="dl_8b4889039aa4471ba979";
export const url=new URL("../icons/currency-circle-dollar-bold.svg?v=6b78ecfbf08f54e44f30e1161b57bb15b0c2320f3431625cc76a1c7984eaac44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
