export const name="mouse-middle-click-light";
export const id="dl_a228d5de742f47238fb6";
export const url=new URL("../icons/mouse-middle-click-light.svg?v=4004a597cfc9e6e80751111593dcb0b02b0ea2d6de234c69c3911292197c6c48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
