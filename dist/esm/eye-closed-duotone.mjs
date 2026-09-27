export const name="eye-closed-duotone";
export const id="dl_da3c11bfdea244ba9684";
export const url=new URL("../icons/eye-closed-duotone.svg?v=ff94260fcc63b3a4aafe2797d3f8150f75b036d5e3f17a68b03e4d775d4ab1c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
