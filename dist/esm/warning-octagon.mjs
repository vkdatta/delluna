export const name="warning-octagon";
export const id="dl_d6055c7e68222df727ce";
export const url=new URL("../icons/warning-octagon.svg?v=69894150986615caaba48a2d6e3023c67aab5966ed1177cff5de8ca5cb9aea96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
