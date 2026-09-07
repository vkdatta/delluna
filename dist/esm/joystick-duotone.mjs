export const name="joystick-duotone";
export const id="dl_20e01f2956fb44b6b360";
export const url=new URL("../icons/joystick-duotone.svg?v=b57bcae4df049e0ad1c0c8812ce3a1be21cec0dbdfe00852887bedbb72d290cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
