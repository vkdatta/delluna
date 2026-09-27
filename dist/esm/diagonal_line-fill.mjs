export const name="diagonal_line-fill";
export const id="dl_810c7524da9167b3e809";
export const url=new URL("../icons/diagonal_line-fill.svg?v=9774ca58c91ae13791158d51d73377bfa435799923e119b91d000d2ca0b61c32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
