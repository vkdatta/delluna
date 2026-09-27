export const name="thumb_down-fill";
export const id="dl_59a181ec4de12e1a3978";
export const url=new URL("../icons/thumb_down-fill.svg?v=7bf57dd2aacd14b17fa1b8b0e6f35fddffaa93ddf05eb01cbbadac98f76b2caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
