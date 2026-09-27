export const name="star-of-david-light";
export const id="dl_bc5b6a0ac0c00c809741";
export const url=new URL("../icons/star-of-david-light.svg?v=03f3a61a202a627cb15f5eb87f58f5fa95d27d9178ec81e1d10e24a1d75ff4a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
