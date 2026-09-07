export const name="video-camera-bold";
export const id="dl_08a13dc379584c5ca2c4";
export const url=new URL("../icons/V/video-camera-bold.svg?v=1c9ce26c2682f693603519c54392924581cd19393e52792d27ceab51ca8f9eb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
