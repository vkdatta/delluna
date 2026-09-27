export const name="house-thin";
export const id="dl_4cc4a245049744e1bd33";
export const url=new URL("../icons/house-thin.svg?v=e8d8b619c3986348769d22e7095212b6ae4b09b1ce4df5650af27d1d736889fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
