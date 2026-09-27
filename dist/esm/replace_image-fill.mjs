export const name="replace_image-fill";
export const id="dl_002ecbc1bd64cafb36d6";
export const url=new URL("../icons/replace_image-fill.svg?v=6cf42a293de209a43b421cf5668f8d7dd8af770898709546678a9164d4e18b98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
