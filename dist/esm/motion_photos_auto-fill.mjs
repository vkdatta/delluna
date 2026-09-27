export const name="motion_photos_auto-fill";
export const id="dl_9e46c31bcce58da177b8";
export const url=new URL("../icons/motion_photos_auto-fill.svg?v=9f3b99e11bcadca3e6a5179791fa473b676294cc955da5179cc75273106a2c60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
