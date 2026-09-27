export const name="touchpad_mouse_off-fill";
export const id="dl_1b54f20a0c907bf6e8a6";
export const url=new URL("../icons/touchpad_mouse_off-fill.svg?v=9e1920a73ebbe235193e839f3c6a5b677684de09569a9dc33a8c4cbabc93bffa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
