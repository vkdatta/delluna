export const name="baby";
export const id="dl_9b82f622618f423f94fd";
export const url=new URL("../icons/baby.svg?v=826d71bed95f144a74112c3152f917a36281c1f17fa781efec327cef7f04d31b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
