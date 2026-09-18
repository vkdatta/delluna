export const name="view_real_size-fill";
export const id="dl_6a391a1534b44b85a1cd";
export const url=new URL("../icons/V/view_real_size-fill.svg?v=850aab9fb63e8e9ec31048f3b9c34f4985dc0f9cae03fc0fd02ace30610bdf72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
