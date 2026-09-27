export const name="drag_handle";
export const id="dl_6da76033f0a53fc9538f";
export const url=new URL("../icons/drag_handle.svg?v=3ef9088a13cf8fe53141dfd2ef3e3bd87007915c9511ac2e6554236b6456c5e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
