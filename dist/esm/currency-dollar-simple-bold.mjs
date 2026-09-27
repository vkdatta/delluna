export const name="currency-dollar-simple-bold";
export const id="dl_7f8667321e8140f6a2ea";
export const url=new URL("../icons/currency-dollar-simple-bold.svg?v=747eee51e6063d96c577e3d7c55216bde1da368d79cd4eef16cbca337b0fd832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
