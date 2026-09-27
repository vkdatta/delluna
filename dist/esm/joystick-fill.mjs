export const name="joystick-fill";
export const id="dl_8d5531d86077c5dd3158";
export const url=new URL("../icons/joystick-fill.svg?v=670ce518e96b2544ad8940e835e95271d2c0b1a65d76e244c6d14fdd9ea6995e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
