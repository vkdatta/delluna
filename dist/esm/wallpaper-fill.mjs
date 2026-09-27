export const name="wallpaper-fill";
export const id="dl_b88af10ddb92784eaafb";
export const url=new URL("../icons/wallpaper-fill.svg?v=58eaff918757a7752f6cb28f6240bafca9a461b3f019da898b23101031b994ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
