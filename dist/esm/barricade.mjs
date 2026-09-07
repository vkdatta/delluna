export const name="barricade";
export const id="dl_58216f5e216a44ca937e";
export const url=new URL("../icons/barricade.svg?v=257220f3b872232f153ab5e936eecb19972eee3949966dfc13d6ac089d628dc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
