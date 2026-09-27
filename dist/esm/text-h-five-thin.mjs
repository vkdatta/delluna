export const name="text-h-five-thin";
export const id="dl_ec112c3b8530556132eb";
export const url=new URL("../icons/text-h-five-thin.svg?v=2feb3d3c4f5f23a035dd0a04f18ab67bdb285a6bcd67811d994624dfd46a2928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
