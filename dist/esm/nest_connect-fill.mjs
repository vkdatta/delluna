export const name="nest_connect-fill";
export const id="dl_c298827679a26ddab265";
export const url=new URL("../icons/nest_connect-fill.svg?v=af5e4d171bd34a16d152a4cc4488164a2bc05ce61d59279f31541ae2452380a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
