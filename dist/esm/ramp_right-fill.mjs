export const name="ramp_right-fill";
export const id="dl_5ee791887f2249f3a858";
export const url=new URL("../icons/R/ramp_right-fill.svg?v=22bfdd69538bf7b14a12127cb7996e187f21b92e71f423b8b21870e477e99710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
