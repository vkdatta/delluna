export const name="activity_zone-fill";
export const id="dl_0140d89461e843dd98b8";
export const url=new URL("../icons/activity_zone-fill.svg?v=847abe7c08e2fadf9da753cf560402aeeec724f900b027d6e5b66faee347e02e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
