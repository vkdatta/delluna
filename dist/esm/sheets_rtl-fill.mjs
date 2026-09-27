export const name="sheets_rtl-fill";
export const id="dl_8fd560ff7c1afafc371a";
export const url=new URL("../icons/sheets_rtl-fill.svg?v=ae9ddb71632553a84b9a6b7a7d76825cd6102afeb8a11fd3cb262dc180e87ae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
