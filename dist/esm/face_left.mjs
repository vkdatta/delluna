export const name="face_left";
export const id="dl_1d342226a49c21d0a3bb";
export const url=new URL("../icons/face_left.svg?v=07fcd798c84abb4e086ef7dfc69d276a656e113aedb0f8ca6d9b25265189155b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
