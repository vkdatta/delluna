export const name="tablets";
export const id="dl_a2914f7da3494387a335";
export const url=new URL("../icons/tablets.svg?v=be45e40f6c0b855c244301a2b2b10483b722c6f5487ca0c351b65af4edcd048e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
