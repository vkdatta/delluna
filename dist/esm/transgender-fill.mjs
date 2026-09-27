export const name="transgender-fill";
export const id="dl_9b59401fe52c544d0b4b";
export const url=new URL("../icons/transgender-fill.svg?v=f88dea9f0814c9cbdf52d2d1134bba6805ec0dde00b94eef04ef326b1fb9b9a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
