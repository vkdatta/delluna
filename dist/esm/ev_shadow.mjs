export const name="ev_shadow";
export const id="dl_d78301c0defc41ee8656";
export const url=new URL("../icons/E/ev_shadow.svg?v=5c083d5e289eab782518414f3fb38adeb5a5b6d2f22a87138bc2ccf80aef025c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
