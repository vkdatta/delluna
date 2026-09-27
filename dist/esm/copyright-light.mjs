export const name="copyright-light";
export const id="dl_04b317d1d4c1476593fe";
export const url=new URL("../icons/copyright-light.svg?v=b3e690c2fbf7f6887b2bb7c06408fb704dc4f08fadcebeea68989a255a005c38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
