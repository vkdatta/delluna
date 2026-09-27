export const name="mouse-right-click-duotone";
export const id="dl_595fde19b3b341879da7";
export const url=new URL("../icons/mouse-right-click-duotone.svg?v=a45911e96c74da100c67433b60ff602f76b9f6be303619c3b8868164b4b5b2c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
