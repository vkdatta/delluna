export const name="tipi-light";
export const id="dl_2dec3399948256f2c58f";
export const url=new URL("../icons/tipi-light.svg?v=e1d61613d3f470f9c0e0f515d3e1ed4f93e410a3fb5348d6d014e32ced414f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
