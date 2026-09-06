export const name="gender-nonbinary-duotone";
export const id="dl_8001d6d41063491783ba";
export const url=new URL("../icons/gender-nonbinary-duotone.svg?v=b056155d77f6187acc3b5735e9ad534c76dbdb2a164094e9b2e190c10000c66e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
