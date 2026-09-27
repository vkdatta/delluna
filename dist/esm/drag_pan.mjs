export const name="drag_pan";
export const id="dl_247b0be8ec1dde07102a";
export const url=new URL("../icons/drag_pan.svg?v=7007d449d631a6301502e1389e9341c7f719f7fe90bb4eac109de129de6f802a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
