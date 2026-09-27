export const name="currency-jpy";
export const id="dl_465930ca2660477d87cc";
export const url=new URL("../icons/currency-jpy.svg?v=9f24600abece3f003f4ea868648fa1d27f937b8fe6be6e3f2c8d92c6096f1289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
