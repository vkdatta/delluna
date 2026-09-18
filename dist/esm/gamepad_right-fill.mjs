export const name="gamepad_right-fill";
export const id="dl_346ef62c8f40447295ba";
export const url=new URL("../icons/gamepad_right-fill.svg?v=8c8e36ae2b3141c9107010ea26efc0addff6452e65591dbd44c17c2a7c4df898",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
