export const name="fit_width-fill";
export const id="dl_3cd9ecd086c02532f250";
export const url=new URL("../icons/fit_width-fill.svg?v=d8b6ab598c015f9cc8a79bf49f63992c04b848516a2f08fdc925e9edbaa1fc09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
