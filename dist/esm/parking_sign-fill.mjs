export const name="parking_sign-fill";
export const id="dl_46920983fec84f96b89b";
export const url=new URL("../icons/parking_sign-fill.svg?v=90e8e97048e1f4522fd66a40a4bb94cc0c20cc8cd005aabb4e977b1d200101ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
