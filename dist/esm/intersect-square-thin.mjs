export const name="intersect-square-thin";
export const id="dl_a38f789d98274b949181";
export const url=new URL("../icons/intersect-square-thin.svg?v=a2a4b8c2d11926efda9e5b058a3ac77a6ee5cf804ad4d8a37c4ccd91829427dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
