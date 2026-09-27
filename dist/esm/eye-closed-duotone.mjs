export const name="eye-closed-duotone";
export const id="dl_da3c11bfdea244ba9684";
export const url=new URL("../icons/eye-closed-duotone.svg?v=d6b624dee387010d6f3c9be41b04c7c5688e7b4b533f90512199e5c01034bc2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
