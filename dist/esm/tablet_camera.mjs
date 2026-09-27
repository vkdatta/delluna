export const name="tablet_camera";
export const id="dl_905390dd68f3233888e4";
export const url=new URL("../icons/tablet_camera.svg?v=21908d21ae36ff5ae29cf9717edc2be19192967877faa24f3bb47b5c6628e74b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
