export const name="mobile_cancel-fill";
export const id="dl_9428bc316abe4b668176";
export const url=new URL("../icons/mobile_cancel-fill.svg?v=cb2b6e44fc7a6e07940295a0b8a0ab7c7729dc27bb323b9fbd3602af3565b367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
