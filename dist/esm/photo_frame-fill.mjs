export const name="photo_frame-fill";
export const id="dl_ca36b5a6c1846cf23ee5";
export const url=new URL("../icons/photo_frame-fill.svg?v=a0747c2eec2e8c4ac04b5bc12cc62c8e3f85e267715dbaba41476b4734956268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
