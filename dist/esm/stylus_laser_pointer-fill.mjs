export const name="stylus_laser_pointer-fill";
export const id="dl_99e5defa46a8ac4b4f6b";
export const url=new URL("../icons/stylus_laser_pointer-fill.svg?v=3e4341181fe1864b86bfcaeddd33f91c7849ebd78c3a778b8a966babad5ef99e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
