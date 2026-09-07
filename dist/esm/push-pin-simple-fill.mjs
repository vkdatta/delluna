export const name="push-pin-simple-fill";
export const id="dl_2e11742160bc4264ac1b";
export const url=new URL("../icons/push-pin-simple-fill.svg?v=df650fc2e0f29ad1b1f81012282941e65f3aecdf7a70bdf080496dcd24ce02be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
