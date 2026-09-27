export const name="bug-droid-fill";
export const id="dl_709ffbb9c047418f9e50";
export const url=new URL("../icons/bug-droid-fill.svg?v=ffb0ae1e8de8d089adf551c59966882a5ccce173e62be74b93d0bb258f77b8fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
