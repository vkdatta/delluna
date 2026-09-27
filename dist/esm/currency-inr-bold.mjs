export const name="currency-inr-bold";
export const id="dl_2af8333488634982baf3";
export const url=new URL("../icons/currency-inr-bold.svg?v=af39f8aa28a738ddd6588492f343927146bcf5a2148be642b4bc5d8768dd395a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
