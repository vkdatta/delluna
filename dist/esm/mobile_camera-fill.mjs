export const name="mobile_camera-fill";
export const id="dl_9ae7c35f50e5468a90da";
export const url=new URL("../icons/mobile_camera-fill.svg?v=0b231d87ccd4ef021a7fa9e379065e2d4a63eb85fb980b829c7c089dbb389751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
