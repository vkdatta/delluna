export const name="speaker-high-light";
export const id="dl_e28194304cb244c79bbc";
export const url=new URL("../icons/S/speaker-high-light.svg?v=fb4956e09f9e66e62e10949fe59c8163c28eb43644cfb6e945ca0628fcd41b5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
