export const name="video-camera-light";
export const id="dl_7dd6c07038cd40d78985";
export const url=new URL("../icons/V/video-camera-light.svg?v=757ed7e34d12a92217acc2a127f1a60d6fb9ae9154e06c833dbf900ff95b0192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
