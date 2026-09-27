export const name="arrow-line-right-light";
export const id="dl_d3500129f3e448d0a42a";
export const url=new URL("../icons/arrow-line-right-light.svg?v=bdca31072be78e9637e0147bcddb82f12c6d53de0982fc09e31ae75e28d629e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
