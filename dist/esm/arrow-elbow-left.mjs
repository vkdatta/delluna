export const name="arrow-elbow-left";
export const id="dl_6ddec2f5c0d14198ae8d";
export const url=new URL("../icons/arrow-elbow-left.svg?v=f522d0d49e0abbae824ac747aa81a76053381d582809b456b4c75a7e3c8db7c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
