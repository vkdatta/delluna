export const name="reset_iso";
export const id="dl_2119efbf61dbb70c3cd2";
export const url=new URL("../icons/reset_iso.svg?v=8b119f64a1dbbdec53cda9d12c973f83dd9132fe0815940083895dc936e4e3fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
