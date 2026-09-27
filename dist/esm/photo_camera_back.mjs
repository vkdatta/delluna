export const name="photo_camera_back";
export const id="dl_c423db5dbd10da80565d";
export const url=new URL("../icons/photo_camera_back.svg?v=c6a2e047918b18191e1b2b474af6f5dbc0dcbbd17cd76dea87dcb181cab089a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
