export const name="2mp-fill";
export const id="dl_f58d075c48a63d45f291";
export const url=new URL("../icons/2mp-fill.svg?v=80eff0dd44163e77a6ec1a0f33d7334bfb2cd76799adb56bf6ad7fc76a1d8c6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
