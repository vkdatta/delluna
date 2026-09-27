export const name="gender-nonbinary-duotone";
export const id="dl_8001d6d41063491783ba";
export const url=new URL("../icons/gender-nonbinary-duotone.svg?v=980457972224a6f5d18c39862f086133a561439bb267c1f37d64ff4ebd943fdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
