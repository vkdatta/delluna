export const name="camera-plus-thin";
export const id="dl_a71490caae9c4e679989";
export const url=new URL("../icons/camera-plus-thin.svg?v=86c339d40c099331945a5ee7954ccdbbd36fd28dbf3795692edbf516dc3d3162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
