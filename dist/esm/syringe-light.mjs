export const name="syringe-light";
export const id="dl_f64dc1f04b544d2fb359";
export const url=new URL("../icons/S/syringe-light.svg?v=264f9646f1a7d9c66e32c5126006f5b799d1f87df660a27e68bcd3c45167f524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
