export const name="flashlight_off";
export const id="dl_ca66d3ebdde06ddc42e9";
export const url=new URL("../icons/flashlight_off.svg?v=a7e1a5ed03f101ba92613ea4fe931160e3781cb8d82f5bd08914e154b38f1aaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
