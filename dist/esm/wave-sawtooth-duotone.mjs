export const name="wave-sawtooth-duotone";
export const id="dl_8b211d445f8ceebedfc2";
export const url=new URL("../icons/wave-sawtooth-duotone.svg?v=b495f07da8ce93ddebe912e76c3db5e07acb8a3a1578508f55a9a7920a032924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
