export const name="21mp-fill";
export const id="dl_a0c4195cfba546c1a3e2";
export const url=new URL("../icons/21mp-fill.svg?v=3a163aea3e503807b570a7ee6d7a8e97afe814902405eb4c86f30f0117582f1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
