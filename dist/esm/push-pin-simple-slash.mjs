export const name="push-pin-simple-slash";
export const id="dl_041b195441c84852a6bb";
export const url=new URL("../icons/push-pin-simple-slash.svg?v=f8a0be93364946246fcfa2cf41aeea2b159871cc06d6900c5fe43b2a143d66a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
