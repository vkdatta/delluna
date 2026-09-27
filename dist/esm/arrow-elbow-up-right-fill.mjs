export const name="arrow-elbow-up-right-fill";
export const id="dl_db0bbe4258ae46f3826a";
export const url=new URL("../icons/arrow-elbow-up-right-fill.svg?v=b024f867102154ce2c9f89645fd298ae029d236aba32dcc0a24d18ae972d28b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
