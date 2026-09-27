export const name="dice-one-thin";
export const id="dl_f398aa66c24a480ab2d5";
export const url=new URL("../icons/dice-one-thin.svg?v=38ed6afe9270f3147c3cc9d46f15c39b4f52110cce43fe0bc1470d9162e18f15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
