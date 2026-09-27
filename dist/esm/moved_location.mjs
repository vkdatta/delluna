export const name="moved_location";
export const id="dl_14941949a4c40fa27b98";
export const url=new URL("../icons/moved_location.svg?v=a1ea6c02cb9681a4f0dd74277e38d89c97fa026d013ea3d94c0b22c738b0b4d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
