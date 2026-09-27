export const name="currency-cny-bold";
export const id="dl_e1578fe2273e46bcaadc";
export const url=new URL("../icons/currency-cny-bold.svg?v=326db844149a89aca598b2d2ac353a23b18ead49db5b15b04d1e12c7eec79fa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
