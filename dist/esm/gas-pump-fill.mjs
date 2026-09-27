export const name="gas-pump-fill";
export const id="dl_c589f67b6e60482882d5";
export const url=new URL("../icons/gas-pump-fill.svg?v=0ac3246f504ea60a243d15a56ebc868ca576b829fe628f8abafe9db494904336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
