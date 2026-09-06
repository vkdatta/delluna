export const name="joystick-light";
export const id="dl_0f6aa779ab2341e0884e";
export const url=new URL("../icons/joystick-light.svg?v=ad49ba7da93d0cd6887bdf3f376c1f79c9d6ea04a424a444e12caccb5502ba15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
