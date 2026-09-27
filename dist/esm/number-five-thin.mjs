export const name="number-five-thin";
export const id="dl_d45ffad162524f008360";
export const url=new URL("../icons/number-five-thin.svg?v=8c022e4063fb5e125a079d3c2250c31d509f6d05f8e2724b3e17ebc01cd5bc04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
