export const name="touchpad_mouse-fill";
export const id="dl_5db8971d155b65d58507";
export const url=new URL("../icons/touchpad_mouse-fill.svg?v=2370ba34875c2a38db44f531418e456e20ea99241f5e486ec1b5a11f725232ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
