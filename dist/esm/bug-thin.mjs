export const name="bug-thin";
export const id="dl_6f790d46875e447ca1aa";
export const url=new URL("../icons/bug-thin.svg?v=2cfc88656f9c8fd921aa738036b8803a17f0626f86a756116264290d690156b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
