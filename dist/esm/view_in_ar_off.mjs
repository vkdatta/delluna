export const name="view_in_ar_off";
export const id="dl_f9aeb7dae17647edb35c";
export const url=new URL("../icons/V/view_in_ar_off.svg?v=d2f46ea8e784a732161244cf630cebc640245ed237ba1cad360e051d1a4b63f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
