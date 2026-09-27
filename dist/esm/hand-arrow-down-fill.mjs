export const name="hand-arrow-down-fill";
export const id="dl_652fe90f134b4e81827a";
export const url=new URL("../icons/hand-arrow-down-fill.svg?v=cc488ab3fea8f09dfc98ff1ee065342255023335dfbf7afb89845726bea8a0a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
