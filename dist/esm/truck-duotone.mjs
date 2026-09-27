export const name="truck-duotone";
export const id="dl_b5e29f1efc06b983ac6f";
export const url=new URL("../icons/truck-duotone.svg?v=5f01a6b581a90cc0adc4e9d5be33cf6696318f4cf523a838e4b95ec05c844f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
