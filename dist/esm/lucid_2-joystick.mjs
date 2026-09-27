export const name="lucid_2-joystick";
export const id="dl_2e3a043c44bd4ae6b503";
export const url=new URL("../icons/lucid_2-joystick.svg?v=8f7e63f3327b967919610b683c51aebc0cc27543a755eba14871647e0a3e1063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
