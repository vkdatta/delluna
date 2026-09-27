export const name="enhanced_encryption-fill";
export const id="dl_8f64098092d02747ad40";
export const url=new URL("../icons/enhanced_encryption-fill.svg?v=94d4a6a205333b996758f853fe383c70f4d7ff0f778105c515da561693adc3cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
