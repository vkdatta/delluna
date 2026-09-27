export const name="circle_notifications";
export const id="dl_0fae862c9af81b59c5c0";
export const url=new URL("../icons/circle_notifications.svg?v=a202469da773bfc2059ca2805806df88c8c54d4402e18fcb8e805930fbed9c85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
