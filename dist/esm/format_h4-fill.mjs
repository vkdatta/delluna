export const name="format_h4-fill";
export const id="dl_0f96177cf3a97cc28c1a";
export const url=new URL("../icons/format_h4-fill.svg?v=b8dc2d92aa41e86f1941bd17760c8ce7385f4bd27e2551de86a854f3c0ae7d18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
