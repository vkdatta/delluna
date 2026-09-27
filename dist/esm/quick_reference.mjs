export const name="quick_reference";
export const id="dl_2d5945225923b12cf3bc";
export const url=new URL("../icons/quick_reference.svg?v=4ef50f6d15d54ba62f0082c9b85a5924374eeef332d697fee06b53bba305b3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
