export const name="playground_2";
export const id="dl_2c9d265fc17e99e16b72";
export const url=new URL("../icons/playground_2.svg?v=a286478a941a0c25b7603e96ba0be5048123312a1d28b6daa9e28b2debb2d21f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
