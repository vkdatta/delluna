export const name="camera-slash-fill";
export const id="dl_22482a9fbf3547f6b984";
export const url=new URL("../icons/camera-slash-fill.svg?v=8df347882038d1f90699008a29066e16d71879b6b4e059107b51db3f925f9304",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
