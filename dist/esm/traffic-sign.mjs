export const name="traffic-sign";
export const id="dl_1ca5a99ddf8178e13094";
export const url=new URL("../icons/traffic-sign.svg?v=0ea3fcac89421c0aa915a101564d408224e307c9eeb51f44576561846c804c22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
