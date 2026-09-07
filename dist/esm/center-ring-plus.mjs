export const name="center-ring-plus";
export const id="dl_e4fb995b19f94727bf04";
export const url=new URL("../icons/add/center-ring-plus.svg?v=12c32dbbfac9e9406a854ef413933cf07c632e8f438273d50565686694a66b04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
