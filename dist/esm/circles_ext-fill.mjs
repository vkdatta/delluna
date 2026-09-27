export const name="circles_ext-fill";
export const id="dl_c850bd7403b62803e949";
export const url=new URL("../icons/circles_ext-fill.svg?v=d3942696251d5493f66cb43e8f900fe6d07ee44f2e2b9f8e6240f36073831ac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
