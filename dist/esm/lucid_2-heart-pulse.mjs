export const name="lucid_2-heart-pulse";
export const id="dl_9f9f14d705d6423491dd";
export const url=new URL("../icons/lucid_2-heart-pulse.svg?v=4a3f64c0f4a07058e79683b8b4e30112cbf4e85120a4b6de7260809ab3cfb621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
