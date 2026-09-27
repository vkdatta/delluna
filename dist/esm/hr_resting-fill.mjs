export const name="hr_resting-fill";
export const id="dl_d9a7eff22791a9742101";
export const url=new URL("../icons/hr_resting-fill.svg?v=595b001ca097def715d23c098b460e79818570d6a360e1fd7f773cd5d1dc5e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
