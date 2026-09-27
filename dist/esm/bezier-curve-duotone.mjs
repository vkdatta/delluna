export const name="bezier-curve-duotone";
export const id="dl_e670e5fbe52f4737b503";
export const url=new URL("../icons/bezier-curve-duotone.svg?v=276bfb38df8295aa3579a00414a6d0ae351dec8bd11c28c7e96a937304442cb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
