export const name="photo_camera_back";
export const id="dl_300eb9d768dfa5243e5a";
export const url=new URL("../icons/photo_camera_back.svg?v=2e632995903e1d9d19921dcdc11d153362d0d41d172ef32724d91935d42d1990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
