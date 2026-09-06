export const name="gas-pump-fill";
export const id="dl_c589f67b6e60482882d5";
export const url=new URL("../icons/gas-pump-fill.svg?v=7253c253fa559cc6bcded0188ea6a048851f0cf9065387364276e0ae927310ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
