export const name="stop_circle-fill";
export const id="dl_4263665bbbcf208cd09d";
export const url=new URL("../icons/stop_circle-fill.svg?v=32cef59150cdf77281a09c657b407dcd477a7181c356e1131eb0cbbbe1fa6995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
