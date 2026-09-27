export const name="orange";
export const id="dl_782c769afb2d4d7283a0";
export const url=new URL("../icons/orange.svg?v=d747dd8f5662f931b98d034f9a3b6da497631e0338c951477d8b02fb4ed81f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
