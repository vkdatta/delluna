export const name="currency-inr-light";
export const id="dl_7134a856286143f79f7f";
export const url=new URL("../icons/currency-inr-light.svg?v=946065e1d92c66283020ed9f888fbc9812d98d85462d77e65a4724c1fb76b6d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
