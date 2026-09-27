export const name="joystick-light";
export const id="dl_0f6aa779ab2341e0884e";
export const url=new URL("../icons/joystick-light.svg?v=05d12a31e91e74318ec39bb80d93bbe337038d582f4c27b7d1d958a22b42bb53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
