export const name="line_end_circle";
export const id="dl_ecdc2defc8cd4bd5a113";
export const url=new URL("../icons/L/line_end_circle.svg?v=ad20df4ef53e9ecd533566097830f138e48f0aa3bb2d11d8088ca046fde3ff87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
