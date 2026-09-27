export const name="cheers-thin";
export const id="dl_0c070cb38e384f5dbe2d";
export const url=new URL("../icons/cheers-thin.svg?v=cf5ee02f9c9a69e151da6ef1f7ff26b2b128e255a8553d150ec6a8ad79c650f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
