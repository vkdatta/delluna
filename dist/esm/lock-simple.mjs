export const name="lock-simple";
export const id="dl_cceb62ba5ba3403d9d5f";
export const url=new URL("../icons/lock-simple.svg?v=000cde4d06204d523ddbbe7864c6131a0871678022e043c81e8a9d3890327db6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
