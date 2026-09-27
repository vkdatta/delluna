export const name="steps-bold";
export const id="dl_b2bbe520eff0bb250fe8";
export const url=new URL("../icons/steps-bold.svg?v=22ab53dbbcb354dcbd26e7e803386bad68ceef30f23e77fcf97c0dcf4b130129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
