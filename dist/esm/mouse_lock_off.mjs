export const name="mouse_lock_off";
export const id="dl_0e34348b86f16523b382";
export const url=new URL("../icons/mouse_lock_off.svg?v=4473528729011097d318d6c9e00ea661fac49ef64540bf68f050b428353e6268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
