export const name="pinch-fill";
export const id="dl_6a7f2c3b77a067deeaa5";
export const url=new URL("../icons/pinch-fill.svg?v=2656a00badbc005c6d9dace4f23641c04e629337023ec96113e4a3756cd8c762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
