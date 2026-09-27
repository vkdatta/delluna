export const name="motion_photos_auto";
export const id="dl_539cda26acdd8445c299";
export const url=new URL("../icons/motion_photos_auto.svg?v=494ae61448a42abf37746212637d9dabe83891b525427843732ec3b4682bf627",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
