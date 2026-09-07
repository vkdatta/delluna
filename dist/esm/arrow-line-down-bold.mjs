export const name="arrow-line-down-bold";
export const id="dl_343d4b5df0534ee0a1a4";
export const url=new URL("../icons/arrow-line-down-bold.svg?v=1ace50a0f019e5a26f7d898ce27d72c404cff48c0f621c502be1896e0aecd99a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
