export const name="directions-fill";
export const id="dl_0f035f1e8dc0c0332530";
export const url=new URL("../icons/directions-fill.svg?v=6431fa7e5f5ee641f6ea7b580e7730dd0bbaecce9fda72e36c83c6439c9023a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
