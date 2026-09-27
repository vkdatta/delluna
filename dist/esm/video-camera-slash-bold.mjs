export const name="video-camera-slash-bold";
export const id="dl_369b7e83c2f9e40e4dee";
export const url=new URL("../icons/video-camera-slash-bold.svg?v=01db484ed239d8145c9e968d7856111c7a9d0e20c5209737e5be733e096fb5cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
