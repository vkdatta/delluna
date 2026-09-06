export const name="currency-dollar-simple-duotone";
export const id="dl_55cc32094c004043a59a";
export const url=new URL("../icons/currency-dollar-simple-duotone.svg?v=ba3f4870925e9c9174e68c8d75a4b124ff2bb51038bd5d3dd5bc51c450e1a0c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
