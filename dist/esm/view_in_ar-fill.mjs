export const name="view_in_ar-fill";
export const id="dl_ba0304db096ea0c1e9e4";
export const url=new URL("../icons/view_in_ar-fill.svg?v=737bbbccfadfebe57b7568c955aa7ba200ab9ecfb32c34b46e0097062d29d5d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
