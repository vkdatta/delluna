export const name="chair";
export const id="dl_dd8d2a0dfd2044cc8bad";
export const url=new URL("../icons/chair.svg?v=4ac653979ca86d0726fad4c9cc387884cff7acbd9add9ef1b8704275c1dc4831",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
