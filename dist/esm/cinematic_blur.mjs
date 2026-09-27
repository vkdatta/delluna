export const name="cinematic_blur";
export const id="dl_6b4918107bc522dd86e1";
export const url=new URL("../icons/cinematic_blur.svg?v=59f576e8ba0b94364fb476b1b6c70985ff402e9e92bc4d22bd1f8ed9197c4bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
