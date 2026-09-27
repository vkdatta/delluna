export const name="arrow_right";
export const id="dl_11d2a36b85669033c26e";
export const url=new URL("../icons/arrow_right.svg?v=dc988b74fc38777ec6c662e4993eca4cc4cf4e7d68a2c800608add9b4af78b5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
