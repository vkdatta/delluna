export const name="clock-afternoon-duotone";
export const id="dl_3d35ee5329b24f77874a";
export const url=new URL("../icons/clock-afternoon-duotone.svg?v=bc064749010c3d7a8b4a039d70f09ad614048f64027277eaec4505509a273c37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
