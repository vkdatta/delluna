export const name="calculator-duotone";
export const id="dl_0448a2bf88974f828dce";
export const url=new URL("../icons/calculator-duotone.svg?v=e969add2feb99f773fce6b8bb4cecc55756cdd2f11d5ea2d5f5078480395effa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
