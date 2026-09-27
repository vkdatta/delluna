export const name="g_mobiledata-fill";
export const id="dl_5259705553182e490f3a";
export const url=new URL("../icons/g_mobiledata-fill.svg?v=2d6807016ec782c7274d2103da4e90178ac6b3dafe56914f0f6c1d1f7aa9c058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
