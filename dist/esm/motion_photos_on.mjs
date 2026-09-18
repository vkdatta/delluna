export const name="motion_photos_on";
export const id="dl_12119d7d7da547e0bc6a";
export const url=new URL("../icons/motion_photos_on.svg?v=7cd45664520cb1a43cd34ed19d1dc7f3df7960b6717b230c37a7eddad356430d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
