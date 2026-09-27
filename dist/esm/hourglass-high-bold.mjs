export const name="hourglass-high-bold";
export const id="dl_177da75287694c68b57b";
export const url=new URL("../icons/hourglass-high-bold.svg?v=4d821b1878b609fb9d7afe18bf693eb6301c0472a5937e920fad62b9adc85a98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
