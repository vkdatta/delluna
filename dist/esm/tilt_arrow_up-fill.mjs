export const name="tilt_arrow_up-fill";
export const id="dl_a512e3e738755dce8039";
export const url=new URL("../icons/tilt_arrow_up-fill.svg?v=d34b95459c72d9a5f32f9eaf969ca6f968f838dfe7efa9f9426006e980776e7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
