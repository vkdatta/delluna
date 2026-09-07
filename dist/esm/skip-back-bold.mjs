export const name="skip-back-bold";
export const id="dl_397135979e6f45129bea";
export const url=new URL("../icons/S/skip-back-bold.svg?v=ac34927ca2f4f323411b86830f344c018f1f1bdd92b671c76d9e295266bd1ff2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
