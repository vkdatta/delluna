export const name="mobile_camera";
export const id="dl_c9bec78d09f1e4382dfd";
export const url=new URL("../icons/mobile_camera.svg?v=ce58b95f7344859379ce61f2c83762b9c5c4c05bcfefb354b487f73e8ef3bdb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
