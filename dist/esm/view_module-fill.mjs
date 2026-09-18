export const name="view_module-fill";
export const id="dl_eec6334a26d14d27af9b";
export const url=new URL("../icons/V/view_module-fill.svg?v=543a54e0846e89f7aba7544b3c0978515bb201492680cddf5a79b41fd3fd9ac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
