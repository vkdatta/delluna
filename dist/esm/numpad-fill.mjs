export const name="numpad-fill";
export const id="dl_0c7e0cf5352b40aa8690";
export const url=new URL("../icons/numpad-fill.svg?v=1971bed6132f8ee14e4dc176470f80af9e80dfd04626b7d55217f747356a89a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
