export const name="dashboard_2_add";
export const id="dl_30a31b0088b648738e83";
export const url=new URL("../icons/dashboard_2_add.svg?v=b34ef1f367e0b39f525c9f4af00353fc67c05833ed45b2d2e4c8bb56df101b99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
