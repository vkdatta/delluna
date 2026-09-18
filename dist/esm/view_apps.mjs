export const name="view_apps";
export const id="dl_1d626adaca6a4baab797";
export const url=new URL("../icons/V/view_apps.svg?v=0da1febfc362c6be6e8b764be850e3fa5be2dc6cc896bf50b3372100f0767f6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
