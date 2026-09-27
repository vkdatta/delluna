export const name="label_off-fill";
export const id="dl_c0cf88955648e2478496";
export const url=new URL("../icons/label_off-fill.svg?v=77814ca73180fe67ca272068e150be73d366bc001f4a601833c2cf4bed336582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
