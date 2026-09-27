export const name="camera_roll";
export const id="dl_214c8697f87ccdafc849";
export const url=new URL("../icons/camera_roll.svg?v=55dd76754a00f7c3d318cfb37c3c6c511ce16fbd0546ee9c7f384731fe159884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
