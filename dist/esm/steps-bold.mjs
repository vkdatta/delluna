export const name="steps-bold";
export const id="dl_601ff55c850148ce8a98";
export const url=new URL("../icons/S/steps-bold.svg?v=22ab53dbbcb354dcbd26e7e803386bad68ceef30f23e77fcf97c0dcf4b130129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
