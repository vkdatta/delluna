export const name="reset_image-fill";
export const id="dl_5f35b88efc7a95564b8d";
export const url=new URL("../icons/reset_image-fill.svg?v=1c355048f22f287d40a4572d18b33407e9b8500a3d33d121010ecfbbb1b3b234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
