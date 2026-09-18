export const name="flip_camera_ios";
export const id="dl_19069c7981f743edb685";
export const url=new URL("../icons/flip_camera_ios.svg?v=fce0d7e8677cbf59213cc86ee570a4c884317d3dcf475aab4bad348256adf11f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
