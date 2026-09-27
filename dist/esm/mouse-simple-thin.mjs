export const name="mouse-simple-thin";
export const id="dl_7ff3f6a0010d4fc0a050";
export const url=new URL("../icons/mouse-simple-thin.svg?v=23f23fa350e5ac451d0e2c8580b56ffb89e9b2d94aac2e5a2f35eedddba672e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
