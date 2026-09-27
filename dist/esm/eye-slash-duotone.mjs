export const name="eye-slash-duotone";
export const id="dl_b02712b9b9844bc2bcee";
export const url=new URL("../icons/eye-slash-duotone.svg?v=ace20f9fc10f9d977375a212a51504446e070e3819f2ae8c6f1d20c5032a4819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
