export const name="share-fat-duotone";
export const id="dl_782401476dcf4688b7c3";
export const url=new URL("../icons/S/share-fat-duotone.svg?v=2fa0be3a5370dd5dadfe1b3ebc0239d0e0f320cc32d3fdfe5dfb09a79ddec192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
