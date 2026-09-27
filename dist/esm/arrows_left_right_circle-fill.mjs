export const name="arrows_left_right_circle-fill";
export const id="dl_4b2d3dd8cdfe8d5a8e2b";
export const url=new URL("../icons/arrows_left_right_circle-fill.svg?v=51e4424d48642d6d4fde39ecfcde0f6143a8e0d01442ac1ed5c5a50f6118f135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
