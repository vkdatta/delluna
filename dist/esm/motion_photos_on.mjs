export const name="motion_photos_on";
export const id="dl_0731790e2ff94b7d2ffe";
export const url=new URL("../icons/motion_photos_on.svg?v=079c3ebd0defd67f27d5315f4fb2a456a41c2af3b6994ddd25e9676620f3b1d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
