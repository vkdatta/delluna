export const name="number-circle-six-light";
export const id="dl_e4631d86b11d48ad95bc";
export const url=new URL("../icons/number-circle-six-light.svg?v=c358fd5968b1ff798f8906ec0af297b249702a7a50bba5c9d36d6855bec5d5ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
