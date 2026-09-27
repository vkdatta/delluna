export const name="dashboard_2_edit-fill";
export const id="dl_c3014c93e6da02c85b5c";
export const url=new URL("../icons/dashboard_2_edit-fill.svg?v=374898f7ffdb6973fe42ab6c139fb812375500ba188c37f195ff39028e0bd022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
