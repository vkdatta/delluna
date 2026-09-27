export const name="cinematic_blur";
export const id="dl_429cee47c4b7a12b8f23";
export const url=new URL("../icons/cinematic_blur.svg?v=62b0d187b4849e002c5b7417994767e262eb340385ce72a8a5e892be70a0e34d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
