export const name="account_circle_off-fill";
export const id="dl_3d7fe58712e445c6874b";
export const url=new URL("../icons/account_circle_off-fill.svg?v=99a21a0b4d98331aba49ec83db53bf432639ef6609df9d1cfa16f22013a7331c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
