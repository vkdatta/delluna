export const name="music-notes-minus";
export const id="dl_4fd21969d83c4c1dac7f";
export const url=new URL("../icons/music-notes-minus.svg?v=1afefc7e94263d9f00d30682773bf7a66d8dc98743efdc276a4b3d83644db51f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
