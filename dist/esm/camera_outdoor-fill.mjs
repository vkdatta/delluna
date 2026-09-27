export const name="camera_outdoor-fill";
export const id="dl_b241d67933f10fd586b2";
export const url=new URL("../icons/camera_outdoor-fill.svg?v=eca761b3dd1be00c07caf5df1d2f8b57d28d26e57ac000ede6b068202069be51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
