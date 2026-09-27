export const name="camera_outdoor-fill";
export const id="dl_0af29227f66ad1b30ea7";
export const url=new URL("../icons/camera_outdoor-fill.svg?v=234b6519dd9810c57ccbce80a2dc1ef5affdee5cc54a9f9c322aab0f28ac5c7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
