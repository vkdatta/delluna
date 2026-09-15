export const name="chromecast_device-fill";
export const id="dl_aafcbe636e614f59974d";
export const url=new URL("../icons/C/chromecast_device-fill.svg?v=e909b317b4e51a8b6918000668d2becf4637ea1966046bb8ec50545be8d6edb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
