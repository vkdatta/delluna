export const name="hourglass-simple-medium-light";
export const id="dl_eba41fb8108f40229692";
export const url=new URL("../icons/hourglass-simple-medium-light.svg?v=c4ca4c9422a60628d0880e5474f6eb46830e09bc96a5c0bd362b790bfdc315a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
