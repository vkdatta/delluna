export const name="caret-line-right";
export const id="dl_cf7693c9f37e404cad7a";
export const url=new URL("../icons/caret-line-right.svg?v=c9ea46025b89804d35c06c2e3cb0bcf6a5d83ffa4715626202d72c1aabc7ae6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
