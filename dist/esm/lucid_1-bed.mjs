export const name="lucid_1-bed";
export const id="dl_f336cc0b84144c529b3e";
export const url=new URL("../icons/lucid_1-bed.svg?v=bd5e5ce610f79287e619f2293afe7cfae87ad5f2a608855c8aac9e79ed5cc5f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
