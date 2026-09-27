export const name="gender-male-thin";
export const id="dl_d16048be3f0b4363a386";
export const url=new URL("../icons/gender-male-thin.svg?v=e09a84d4e9b5f1ec20e83cbb9c5f4afcfd76496638f16f165f566d3b10e26727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
