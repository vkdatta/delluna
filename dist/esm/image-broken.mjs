export const name="image-broken";
export const id="dl_0493671b4a9545e294ed";
export const url=new URL("../icons/image-broken.svg?v=870e5ed723e23dceeda094ff491c5913c32866c50c75eeb39aec52d379f2d79a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
