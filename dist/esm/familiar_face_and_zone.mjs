export const name="familiar_face_and_zone";
export const id="dl_3def1ccbf12982e5b083";
export const url=new URL("../icons/familiar_face_and_zone.svg?v=1e942099b1f845f8f48805f973dea0fca3f191df1051f328c21a81d8d04e0d6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
