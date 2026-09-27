export const name="camera";
export const id="dl_c61838e1974348d1bcb9";
export const url=new URL("../icons/camera.svg?v=2d77a1979469956baeea89602fefc054326b2c6e23fab4b20e881484cfdf2fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
