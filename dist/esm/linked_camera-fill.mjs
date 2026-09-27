export const name="linked_camera-fill";
export const id="dl_698c5cc54c0761e268a0";
export const url=new URL("../icons/linked_camera-fill.svg?v=4eae4fe57911cb5f7535d2f5dcee018e19f03d128f5cbb1ba8be42683b2812b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
