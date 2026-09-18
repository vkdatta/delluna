export const name="nest_cam_iq-fill";
export const id="dl_12bd01b1bad94c66a15d";
export const url=new URL("../icons/nest_cam_iq-fill.svg?v=8a31aa9c3b2b881b7799f2475d65abe5f00a02e857a4fe8518bd1916145cbfe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
