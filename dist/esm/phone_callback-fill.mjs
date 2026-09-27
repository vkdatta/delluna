export const name="phone_callback-fill";
export const id="dl_5b1d84d49c1d7d1373d6";
export const url=new URL("../icons/phone_callback-fill.svg?v=620347c639c6d30265515df7fd1949766adc3aeb171ef7d8fb74c02e1dab2605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
