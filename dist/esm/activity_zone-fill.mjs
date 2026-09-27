export const name="activity_zone-fill";
export const id="dl_5f109a49c0c547bdad87";
export const url=new URL("../icons/activity_zone-fill.svg?v=c7c29b77f48a4d328526657109bfab72c9f09713059b80d1d87c93e7de6429af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
