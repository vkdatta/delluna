export const name="phone_callback";
export const id="dl_15bd4e4cc006b54a2d87";
export const url=new URL("../icons/phone_callback.svg?v=502400e7352facfb7df83001d0d5115929a9cc4e411fadfee7e036771cef1860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
