export const name="globe-x-light";
export const id="dl_64645d86730843e4afd7";
export const url=new URL("../icons/globe-x-light.svg?v=8a20efa7044b1cfc0c4d71b2d55ddde30a92b707a764b80b0d5c00b742387adb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
