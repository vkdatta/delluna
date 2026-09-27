export const name="mouse-left-click-fill";
export const id="dl_515cc5c90ef44845aae5";
export const url=new URL("../icons/mouse-left-click-fill.svg?v=fe07c39e6c364e105ebcc30b2e41039a99e0a2ba0debc8789e7849b48fdba5f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
