export const name="rear_camera";
export const id="dl_3af3c81af5ba4f1b2835";
export const url=new URL("../icons/rear_camera.svg?v=f465ae1d0b92e086c41d5c9c71c5515ea8fce5d64940651a230643a09051f2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
