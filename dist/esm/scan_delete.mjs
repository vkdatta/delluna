export const name="scan_delete";
export const id="dl_4b698284c809fb3a6c63";
export const url=new URL("../icons/scan_delete.svg?v=a90e208fd26c085d3cb195c255152f14bb7a7d4c24660fdaa6492dd68dd55483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
