export const name="jeep-light";
export const id="dl_de5c3ffe30404795b20f";
export const url=new URL("../icons/jeep-light.svg?v=a9842e6f6d45a6322a7e425a5247f6592eaa3a236bc1df7c253ca8f69540dab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
